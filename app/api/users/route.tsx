import { NextRequest, NextResponse } from "next/server";
import schema, { UserInput } from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // If u remove request param nextjs will cache the result
  // const users = await prisma.user.findMany();
  // if (users.length < 1) {
  //   return NextResponse.json({ error: "No Records Found" }, { status: 404 });
  // }
  // return NextResponse.json(users);
}

// export async function POST(request: NextRequest) {
//   const { body } = await request.json();
//   const validation = schema.safeParse({ body: body });
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }

//   const isUserExist = await prisma.user.findUnique({
//     where: {
//       email: body.email,
//     },
//   });
//   if (isUserExist) {
//     return NextResponse.json(
//       {
//         error: `User with email ${body.email} already exist!`,
//       },
//       { status: 409 }
//     );
//   }

//   const user = await prisma.user.create({
//     data: {
//       firstName: body.firstName,
//       lastName: body.lastName,
//       email: body.email,
//       password: body.password,
//       passwordConfirmation: body.passwordConfirmation,
//     },
//   });

//   return NextResponse.json(user, { status: 201 });
// }
