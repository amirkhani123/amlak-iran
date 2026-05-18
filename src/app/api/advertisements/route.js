import modelProfile from "@/models/profile";
import connectDB from "@/utils/connections";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("FETCH :)");
  try {
    await connectDB();
    const profiles = await modelProfile
      .find({ published: true })
      .select("-userId");
    return NextResponse.json({ profiles }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "مشکلی سمت سرور رخ داده است ", type: "failed" },
      { status: 500 }
    );
  }
}
