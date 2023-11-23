import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// NOTE: product modal is not available so commente the functions.

// export async function GET(request: NextRequest) {
//   const products = await prisma.product.findMany();
//   return NextResponse.json(products, { status: 200 });
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const validation = schema.safeParse(body);
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }

//   const newProduct = await prisma.product.create({
//     data: { name: body.name, price: body.price },
//   });

//   return NextResponse.json(newProduct, { status: 201 });
// }
