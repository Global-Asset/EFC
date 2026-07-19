import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types/api";
import type { Merchant } from "@/models/Merchant";

export async function POST(
  request: Request
) {
  const body = await request.json();

  const merchant: Merchant = {
    id: "1",
    name: body.name || "",
    wallet: body.wallet || "",
    status: "registered",
    createdAt: new Date().toISOString(),
  };

  const response: ApiResponse<Merchant> = {
    success: true,
    data: merchant,
    message: "Merchant registered successfully",
  };

  return NextResponse.json(response);
}
