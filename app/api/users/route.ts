import { getUsersByTeamId, createUser } from "@/lib/firestore/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const teamId = req.nextUrl.searchParams.get("teamId");
  if (!teamId) return NextResponse.json({ message: "Team ID is required" }, { status: 400 });

  try {
    const users = await getUsersByTeamId(teamId);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, teamId, userUID } = body;
  if (!name || !email || !teamId || !userUID)
    return NextResponse.json({ message: "Name, email, teamId, and userUID are required" }, { status: 400 });

  try {
    const userId = await createUser(body);
    return NextResponse.json({ message: "User created", userId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}