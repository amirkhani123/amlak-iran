import modelUser from "@/models/user";
import connectDB from "@/utils/connections";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { email } = await params;
    if (!email)
      return NextResponse.json(
        { message: "ابتدا وارد حساب کاربری حود شوید", type: "failed" },
        { status: 405 }
      );
    await connectDB();
    const existed = await modelUser.findOne({ email }).select("-password");
    if (existed)
      return NextResponse.json({ user: existed, message: "" }, { status: 400 });
    return NextResponse.json(
      { message: "کاربر یافت نشد", type: "failed" },
      { status: 405 }
    );
  } catch {
    return NextResponse.json(
      { message: "مشکلی سمت سرور رخ داده است", type: "failed" },
      { status: 500 }
    );
  }
}
