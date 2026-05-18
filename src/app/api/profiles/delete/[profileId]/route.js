import modelProfile from "@/models/profile";
import modelUser from "@/models/user";
import connectDB from "@/utils/connections";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    const { profileId } = context.params;
    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        { message: "لطفا اول وارد حساب کاربری خود شوید", type: "filed" },
        { status: "402" }
      );
    await connectDB();
    const user = await modelUser.findOne({ email: session.user.email });
    const profile = await modelProfile.findOne({ _id: profileId });
    if (!user.equals(profile.userId) && user.role === "USER")
      return NextResponse.json(
        { message: "حساب کاربری نا معتبر است", type: "filed" },
        { status: "402" }
      );
    await modelProfile.deleteOne({ _id: profileId });
    revalidatePath("/buy-residentials");
    return NextResponse.json(
      {
        message: "با موفقیت آگهی شما حذف شد 😀",
        type: "success",
      },
      {
        status: "200",
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "مشکلی در سمت سرور پیش آمده است", type: "filed" },
      { status: "500" }
    );
  }
}
