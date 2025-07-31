import {
  getTaskById,
  updateTask,
  deleteTask,
} from "@/lib/firestore/taskModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { taskId: string } }) {
  try {
    const task = await getTaskById(params.taskId);
    return task ? NextResponse.json(task) : NextResponse.json({ message: "Task not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching task" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { taskId: string } }) {
  const body = await req.json();
  try {
    await updateTask(params.taskId, body);
    return NextResponse.json({ message: "Task updated" });
  } catch (error) {
    return NextResponse.json({ message: "Error updating task" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { taskId: string } }) {
  try {
    await deleteTask(params.taskId);
    return NextResponse.json({ message: "Task deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting task" }, { status: 500 });
  }
}