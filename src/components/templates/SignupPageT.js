"use client";
import { actionSignup } from "@/actions/actionSignup";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
function SignupPageT() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const session = useSession();
  const initialState = { message: "", type: "" };
  const [state, formAction, pending] = useActionState(
    actionSignup,
    initialState
  );
  useEffect(() => {
    if (state.type) {
      if (state.type == "success") {
        toast.success(state.message);
        router.replace("/signin");
      } else {
        console.log(state);
        toast.error(state.message);
      }
    }
  }, [state,router]);
  useEffect(() => {
    if (session.status === "authenticated") router.replace("/dashboard");
  }, [session,router]);
  return (
    <div className="flex items-center justify-center text-black dark:text-second">
      <form
        className="w-80 border-primary  min-h-80 mt-12  rounded-2xl shadow-2xl shadow-primary flex items-center flex-col"
        action={async (FormData) => {
          await formAction(FormData);
        }}
      >
        <h3 className="text-primary text-3xl text-center my-2 font-normal">
          ثبت نام
        </h3>
        <div>
          <label htmlFor="email" className="font-normal block">
            ایمیل : <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
          />
        </div>
        <div className="mt-2 relative">
          <label htmlFor="password" className="font-normal block">
            گذرواژه : <span className="text-red-500">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
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
        <div>
          <label htmlFor="rePassword" className="font-normal block">
            تکرار گذرواژه : <span className="text-red-500">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="rePassword"
            id="rePassword"
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
          />
        </div>
        <button
          disabled={pending}
          type="sumbit"
          className="bg-primary text-second p-2 mt-2 rounded-md font-light transition-all duration-300 hover:opacity-50 disabled:opacity-50"
        >
          {pending ? "درحال ثبت نام ..." : "ثبت نام"}
        </button>
        <p className="my-3 text-base font-light">
          آیا حساب کاربری دارد ؟
          <Link href="/signin" className="text-blue-600 mr-1 ">
            ورود
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPageT;
