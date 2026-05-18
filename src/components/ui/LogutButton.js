"use client";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { MdOutlineLogout } from "react-icons/md";

function LogutButton() {
  return (
    <button
      onClick={() => {
        toast.success("به امید دیدار ❤️");
        signOut();
      }}
      className=" li-hover w-full flex items-center gap-1 text-red-500 font-normal mt-3 before:bg-red-500 hover:text-red-500"
    >
      <MdOutlineLogout />
      خروج
    </button>
  );
}

export default LogutButton;
