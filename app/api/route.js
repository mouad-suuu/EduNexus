import { NextResponse } from "next/server";

import University from "@/models/Univeresity";
import dbConnect from "@/lib/db";

export const GET = async () => {
  await dbConnect();
  const data = await University.find();

  return NextResponse.json(data);
};
