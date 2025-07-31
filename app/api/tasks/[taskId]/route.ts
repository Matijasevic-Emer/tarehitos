import {
  getTaskById,
  updateTask,
  deleteTask,
} from "@/lib/firestore/taskModel";
import { NextRequest, NextResponse } from "next/server";

// GET /api/tasks/:taskId
export async function GET(
  req: NextRequest,
   { params }: { params: Promise<{ taskId: string }> },
) {
  const  taskId  = (await params).taskId;
  try {
    const task = await getTaskById(taskId);
    return task
      ? NextResponse.json(task)
      : NextResponse.json({ message: "Task not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching task" }, { status: 500 });
  }
}

// PUT /api/tasks/:taskId
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const  taskId  = (await params).taskId;
  const body = await req.json();

  try {
    await updateTask(taskId, body);
    return NextResponse.json({ message: "Task updated" });
  } catch (error) {
    return NextResponse.json({ message: "Error updating task" }, { status: 500 });
  }
}

// DELETE /api/tasks/:taskId
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> },
) {
  const  taskId  = (await params).taskId;

  try {
    await deleteTask(taskId);
    return NextResponse.json({ message: "Task deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting task" }, { status: 500 });
  }
}
