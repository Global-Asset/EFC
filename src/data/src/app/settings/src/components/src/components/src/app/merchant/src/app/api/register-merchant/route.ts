import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const merchant = {
    name: body.name || "",
    wallet: body.wallet || "",
    status: "registered"
  };

  return NextResponse.json(merchant);
}
