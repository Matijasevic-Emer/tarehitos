import { getUserByUID } from "@/lib/firestore/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { UID: string } }) {
  try {
    const user = await getUserByUID(params.UID);
    return user ? NextResponse.json(user) : NextResponse.json({ message: "User not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}