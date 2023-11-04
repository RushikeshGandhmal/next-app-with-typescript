// No Need to do this in production, it's to get to know about how Authemtication session works and token looks and the info we get from Google (I'm using pgoogle provide) which will send to server to identify client.

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}
