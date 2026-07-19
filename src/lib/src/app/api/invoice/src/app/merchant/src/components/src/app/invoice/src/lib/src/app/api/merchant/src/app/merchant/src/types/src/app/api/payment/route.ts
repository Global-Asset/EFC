import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const payment = {
    invoiceId: body.invoiceId,
    status: "pending",
    message: "Waiting for EFC blockchain confirmation"
  };

  return NextResponse.json(payment);
}
