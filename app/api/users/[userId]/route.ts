import { NextRequest, NextResponse } from "next/server";
import {getUserById} from "@/lib/firestore/userModel";

//TODO: Por ahora solo el get del user que cree a mano en firebase, luego mas adelante gestion de user
export async function GET(
  req: NextRequest,
   { params }: { params: Promise<{ userId: string }> },
) {
  const  userId  = (await params).userId;
  try {
    const user = await getUserById(userId);
    return user
      ? NextResponse.json(user)
      : NextResponse.json({ message: "User not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}
