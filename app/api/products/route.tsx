import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(req: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "prod1",
      price: 100,
    },
    {
      id: 2,
      name: "prod2",
      price: 100,
    },
    {
      id: 3,
      name: "prod3",
      price: 100,
    },
  ]);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  return NextResponse.json(body, { status: 201 });
}
