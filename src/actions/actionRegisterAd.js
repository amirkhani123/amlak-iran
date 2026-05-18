"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import modelProfile from "@/models/profile";
import modelUser from "@/models/user";
import connectDB from "@/utils/connections";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";

export default async function actionRegisterAd(profileDeta) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session.user)
      return {
        type: "failed",
        message: "لطفا وارد حساب کاربری خود شوید",
      };
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = profileDeta;
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return {
        type: "failed",
        message: "مقادیر وارد شده نامعتبر است",
      };
    }
    const user = await modelUser.findOne({ email: session.user.email });
    if (!user)
      return {
        type: "failed",
        message: "کاربر مورد نظر یافت نشد",
      };

    await modelProfile.create({
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });
    return {
      message: "آگهی شما با موفقیت ثبت شد 😀",
      type: "success",
    };
  } catch (error) {
    return {
      type: "failed",
      message: "مشکلی در سمت سرورو اتفاق افتاده است",
    };
  }
}
