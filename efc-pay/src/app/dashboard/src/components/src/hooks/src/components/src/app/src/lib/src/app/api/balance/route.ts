import { NextResponse } from "next/server";
import { getEfcBalance } from "@/lib/balance";

export async function POST(request: Request) {
  const body = await request.json();

  const result = getEfcBalance(
    body.wallet || ""
  );

  return NextResponse.json(result);
}
