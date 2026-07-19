import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const confirmation = {
    transactionHash:
      body.transactionHash || "",
    status: "pending",
    message:
      "Waiting for blockchain confirmation"
  };

  return NextResponse.json(confirmation);
}
