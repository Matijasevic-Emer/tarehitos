import {
  getUserById,
  updateUser,
  deleteUser,
} from "@/lib/firestore/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const user = await getUserById(params.userId);
    return user ? NextResponse.json(user) : NextResponse.json({ message: "User not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
  const body = await req.json();
  try {
    await updateUser(params.userId, body);
    return NextResponse.json({ message: "User updated" });
  } catch (error) {
    return NextResponse.json({ message: "Error updating user" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await deleteUser(params.userId);
    return NextResponse.json({ message: "User deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting user" }, { status: 500 });
  }
}
