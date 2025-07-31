import { NextRequest, NextResponse } from "next/server";
import {
  createTask,
  getTasksByBoardId,
} from "@/lib/firestore/taskModel";

export async function GET(req: NextRequest) {
  const boardId = req.nextUrl.searchParams.get("boardId");
  if (!boardId) return NextResponse.json({ message: "Board ID is required" }, { status: 400 });

  try {
    const tasks = await getTasksByBoardId(boardId);
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching tasks" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, description, boardId, createdUser, createdDate } = body;
  if (!name || !description || !boardId || !createdUser || !createdDate)
    return NextResponse.json({ message: "All required fields must be filled" }, { status: 400 });

  try {
    const taskId = await createTask(body);
    return NextResponse.json({ message: "Task created", taskId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating task" }, { status: 500 });
  }
}
