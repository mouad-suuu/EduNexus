// app/api/universities/route.ts

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { addUniversity } from "@/actions/action";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const data = await req.json();
    const savedUniversity = await addUniversity(data);
    return NextResponse.json(savedUniversity, { status: 201 });
  } catch (error) {
    console.error("Error creating university:", error);
    return NextResponse.json(
      { error: "Error creating university" },
      { status: 400 }
    );
  }
}
