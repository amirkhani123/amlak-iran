import connectDB from "@/utils/connections";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import modelUser from "@/models/user";

export async function GET(req, { params }) {
  try {
    const { email } = await params;
    await connectDB();
    const session = await getServerSession(authOptions);
    if (session.user.email !== email)
      return NextResponse.json(
        { message: "ابتدا وارد حساب کاربری خود شوید", type: "failed" },
        { status: 405 }
      );
    const [user] = await modelUser.aggregate([
      { $match: { email } },
      {
        $lookup: {
          from: "modelprofiles",
          foreignField: "userId",
          localField: "_id",
          as: "profiles",
        },
      },
    ]);
    return NextResponse.json(user.profiles, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "مشکلی سمت سرور رخ داده است", type: "failed" },
      { status: 500 }
    );
  }
}
