import { NextResponse } from "next/server";

export default async function GET() {
  return NextResponse.json({ name: "Anuj Singh" });
}
