import { getTasksByUserId } from "@/lib/firestore/taskModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) return NextResponse.json({ message: "User ID is required" }, { status: 400 });

  try {
    const tasks = await getTasksByUserId(userId);
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching tasks" }, { status: 500 });
  }
}