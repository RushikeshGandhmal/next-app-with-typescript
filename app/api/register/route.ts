import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // check if user/email already exists
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user) {
    return NextResponse.json(
      { error: "User Already Exists!" },
      { status: 409 }
    );
  }

  // If user not exists, hash the password and create new User.
  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email }, { status: 201 });
}
