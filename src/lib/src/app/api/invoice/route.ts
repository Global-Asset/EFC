import { NextResponse } from "next/server";

export async function POST() {

  const invoice = {
    id: Date.now().toString(),
    token: "EFC",
    contract:
      "0x677ce9cba67f7484ea951a12897ce780cfd8fed1",
    status: "pending"
  };

  return NextResponse.json(invoice);
}
