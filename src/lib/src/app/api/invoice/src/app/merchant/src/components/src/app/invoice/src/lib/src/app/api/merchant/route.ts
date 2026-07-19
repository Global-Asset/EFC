import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const merchant = {
    id: Date.now().toString(),
    name: body.name || "Unknown Merchant",
    wallet: body.wallet || "",
    status: "active"
  };

  return NextResponse.json(merchant);
}
