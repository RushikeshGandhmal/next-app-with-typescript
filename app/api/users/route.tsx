import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // If u remove request param nextjs will cache the result
  return NextResponse.json([
    { id: 1, name: "Rushi" },
    { id: 2, name: "Rethink" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json({ error: "Name not found" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
