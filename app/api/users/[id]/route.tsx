import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  console.log("id:", id);

  if (Number(id) > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    id,
    name: "Mosh",
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await req.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.message, { status: 400 });

  if (Number(id) > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json(body);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (Number(id) > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({});
}
