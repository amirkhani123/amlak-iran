"use client";
import Link from "next/link";
import { useState } from "react";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { FaMoon, FaUserAlt } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { links } from "@/constants/variables";
import toast from "react-hot-toast";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { SiHomebridge } from "react-icons/si";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const { data } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, SetSearch] = useState("");

  return (
    <>
      <header className="sticky font-sahim top-1 z-50 mx-auto mt-2 flex h-[76px] w-full items-center font-semibold justify-between rounded-2xl border border-white/10 bg-primary/95 px-4 shadow-lg shadow-blue-500/15 backdrop-blur-xl lg:px-6 ">
        <Link href="/" className="flex items-center gap-3">
          <SiHomebridge className="text-blue-500 dark:text-white" size={40} />
          <h1 className="text-primary font-sahim font-bold text-xl max-sm:hidden">
            املاک ایران
          </h1>
        </Link>
        <ul className="flex gap-4  items-center ">
          {links.map((i, index) => (
            <li
              key={index}
              className={
                pathname === i.link
                  ? "header-list text-blue-700 before:w-full "
                  : "header-list text-blue-500"
              }
            >
              <Link href={i.link}> {i.text}</Link>
            </li>
          ))}
          {pathname === "/buy-residentials" && (
            <li className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
                placeholder="جستجو..."
                className="w-44 md:w-56 opacity-100 lg:w-64 bg-transparent rounded-xl border border-neutral-200 bg-second/90 px-4 py-2 text-sm text-primary placeholder:text-primary/60 shadow-sm outline-none backdrop-blur-md transition-all duration-300 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-300/30 dark:bg-primary/30 dark:text-second dark:placeholder:text-second/60 dark:border-white/10"
              />

              <Link
                href={`/buy-residentials?search=${search}&category=${searchParams.get("category") || ""}`}
                className="absolute bottom-2 left-1"
              >
                <BiSearch color="blue" size={25} />
              </Link>
            </li>
          )}
        </ul>
        <div className="flex items-center">
          {data ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-1 hover:bg-second hover:text-primary rounded-[10px] p-[7px] transition-all ease-in duration-300 bg-primary text-second hover:-translate-y-0.5  border max-sm:p-2"
              >
                <FaUserAlt />
                <span className="max-sm:hidden ">حساب کاربری</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  toast.success("به امید دیدار 👋");
                  signOut({ callbackUrl: "/" });
                }}
                className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:text-white hover:shadow-md max-sm:p-2"
              >
                <LuLogOut size={18} />
                <span className="max-sm:hidden ">خروج</span>
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="flex items-center gap-2 rounded-xl border border-primary/20 bg-second px-4 py-2 text-sm font-medium text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-second hover:shadow-md max-sm:p-1"
            >
              <LuLogIn size={20} />
              <span className="max-sm:hidden ">ورود</span>
            </Link>
          )}
        </div>
      </header>
      <button
        aria-label="تغییر حالت روشن و تاریک"
        className="fixed bottom-6 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-primary text-second shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-second hover:text-primary"
        onClick={() => {
          setIsDark(!isDark);
          document.documentElement.classList.toggle("dark");
        }}
      >
        {isDark ? (
          <IoSunny size={26} className="animate-fade-in text-yellow-400" />
        ) : (
          <FaMoon size={22} className="animate-fade-in" />
        )}
      </button>
    </>
  );
}

export default Header;
