"use server";
import modelUser from "@/models/user";
import { generatePassword } from "@/utils/auth";
import connectDB from "@/utils/connections";
export async function actionSignup(prevState, FormData) {
  try {
    await connectDB();
    const email = FormData.get("email");
    const password = FormData.get("password");
    const rePassword = FormData.get("rePassword");
    if (!email || !password) {
      return { message: "اطلاعات وارد شده کامل نیست !", type: "failed" };
    }
    if (password !== rePassword)
      return { message: "گذرواژه با تکرار آن مطابقت ندارد !", type: "failed" };
    const existed = await modelUser.findOne({ email: email });
    if (existed)
      return {
        message: "ایمیل مورد نظر قبلا ثبت شده است!",
        type: "failed",
      };
    const passwordHashed = await generatePassword(password);
    await modelUser.create({ email, password: passwordHashed });
    return {
      message: "با موفقیت ثبت نام شدید 😀",
      type: "success",
    };
  } catch {
    return {
      message: "مشکلی در سمت سرور پیش آمده است",
      type: "failed",
    };
  }
}
