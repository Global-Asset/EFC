import { NextResponse } from "next/server";
import { createEfcTransaction } from "@/lib/transaction";

export async function POST(request: Request) {
  const body = await request.json();

  const transaction = createEfcTransaction(
    body.from || "",
    body.to || "",
    body.amount || "0"
  );

  return NextResponse.json(transaction);
}
