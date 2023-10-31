import { NextRequest, NextResponse } from "next/server";
import schema, { UserInput } from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // If u remove request param nextjs will cache the result
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const { body } = await request.json();
  const validation = schema.safeParse({ body: body });
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(
    {
      id: 21,
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      passwordConfirmation: body.passwordConfirmation,
      email: body.email,
    },
    { status: 201 }
  );
}
