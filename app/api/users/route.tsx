import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "raghad" },
    { id: 2, name: "rawan" },
  ]);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });
  return NextResponse.json(body, { status: 201 });
}
