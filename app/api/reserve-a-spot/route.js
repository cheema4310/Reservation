import { NextResponse } from "next/server";

export async function POST(req) {
  const body = req.body;
  // then add this to database through mongoose
  return NextResponse.json({ data: {} });
}
