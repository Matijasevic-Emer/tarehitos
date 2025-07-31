import { getUserByUID } from "@/lib/firestore/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { UID: string } }
) {
  const UID = context?.params?.UID;
  console.log("params:", context.params);
  if (!UID) {
    return NextResponse.json({ message: "UID missing" }, { status: 400 });
  }

  try {
    const user = await getUserByUID(UID);
    return user
      ? NextResponse.json(user)
      : NextResponse.json({ message: "User not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}
