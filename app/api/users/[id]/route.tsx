import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { body } = await request.json();
//   const validation = schema.safeParse({ body: body });
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }
//   const existUser = await prisma.user.findUnique({
//     where: { id: params.id },
//   });
//   if (!existUser) {
//     return NextResponse.json(
//       { error: `User with ID ${params.id} doesn't exists!` },
//       { status: 404 }
//     );
//   }
//   const updatedEmail = body.email;

//   // Check if the email being updated to is the same as the current one
//   if (existUser.email !== updatedEmail) {
//     // Check if the updated email already exists in the database
//     const existingUserWithUpdatedEmail = await prisma.user.findUnique({
//       where: { email: updatedEmail },
//     });

//     // If another user already has the updated email, handle it
//     if (existingUserWithUpdatedEmail) {
//       return NextResponse.json(
//         {
//           error: `User with email ${body.email} already exist!`,
//         },
//         { status: 409 }
//       );
//     }
//   }
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: existUser.id,
//     },
//     data: {
//       firstName: body.firstName,
//       lastName: body.lastName,
//       email: updatedEmail,
//       password: body.password,
//       passwordConfirmation: body.passwordConfirmation,
//       followers: body?.followers ? body.followers : existUser.followers,
//       isActive: body?.isActive ? body.isActive : existUser.isActive,
//       registeredAt: body?.registeredAt
//         ? body.registeredAt
//         : existUser.registeredAt,
//     },
//   });

//   return NextResponse.json(updatedUser, { status: 200 });
// }

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const exisUser = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!exisUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  await prisma.user.delete({ where: { id: exisUser.id } });
  return NextResponse.json({}, { status: 200 });
}
