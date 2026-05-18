import modelProfile from "@/models/profile";
import connectDB from "@/utils/connections";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const profiles = await modelProfile
      .find({ published: false })
      .select("-userId");
    return NextResponse.json(
      { data: profiles, type: "success" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "مشکلی سمت سرور رخ داده است", type: "failed" },
      { status: 500 }
    );
  }
}
