import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // If u remove request param nextjs will cache the result
  return NextResponse.json([
    { id: 1, name: "Rushi" },
    { id: 2, name: "Rethink" },
  ]);
}
