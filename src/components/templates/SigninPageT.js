"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "../modules/Loader";
function SigninPageT() {
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const router = useRouter();
  const [isPending, setIspending] = useState(false);
  const changeHandler = (e) => {
    setFormValue((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setIspending(true);
    const res = await signIn("credentials", {
      email: formValue.email,
      password: formValue.password,
      redirect: false,
    });
    setIspending(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("خوش آمدید 👋🏻");
      router.push("/");
    }
  };
  return (
    <div className="flex items-center justify-center text-black dark:text-second">
      <form
        className="w-80 border-primary  h-80 mt-12  rounded-2xl shadow-2xl shadow-primary flex items-center flex-col"
        onChange={changeHandler}
        onSubmit={submitHandler}
      >
        <h3 className="text-primary text-3xl text-center my-2 font-normal">
          ورود
        </h3>
        <div>
          <label htmlFor="email" className="font-normal block">
            ایمیل : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            defaultValue={formValue.email}
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
          />
        </div>
        <div className="mt-5 relative">
          <label htmlFor="password" className="font-normal block">
            گذرواژه : <span className="text-red-500">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
            minLength="8"
            defaultValue={formValue.password}
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1 mb-3"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}
            className="absolute top-8 left-2 text-primary "
          >
            {show ? <IoEyeSharp size={25} /> : <BsEyeSlashFill size={25} />}
          </button>
        </div>
        {isPending ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="bg-primary text-second  text-center text-2xl w-36 p-1 mt-3 rounded-md font-light transition-all duration-300 hover:opacity-50  "
          >
            ورود
          </button>
        )}

        <p className="mt-3 text-base font-light">
          آیا حساب کاربری ندارید؟
          <Link href="/signup" className="text-blue-600 ">
            ثبت نام
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SigninPageT;
