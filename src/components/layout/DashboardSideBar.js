"use client";
import Link from "next/link";
import LogutButton from "../ui/LogutButton";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import MenuMobileDashboard from "../modules/MenuMobileDashboard";
function DashboardSideBar({ children, role, email }) {
  const pathname = usePathname();
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);
  return (
    <div className="flex text-black mt-5 mr-3 gap-2 dark:text-white max-md:flex-col">
      <aside className="w-[20%] flex items-center flex-col shadow-3xl rounded-md p-3 h-60 max-md:hidden">
        <FaRegUserCircle size={55} color="#1d4ed8" />
        <p className="mt-px text-gray-700 text-[0.95rem]  dark:text-white">
          {role === "ADMIN" ? "admin" : email}
        </p>
        <span className="inline w-full h-px bg-gray-500 mb-2 font-medium"></span>
        <Link
          href="/dashboard"
          className={clsx("text-dashboard li-hover ", {
            "li-static": pathname === "/dashboard",
          })}
        >
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-ads"
          className={clsx("text-dashboard li-hover ", {
            "li-static": pathname === "/dashboard/my-ads",
          })}
        >
          آگهی های من
        </Link>
        {role === "ADMIN" && (
          <Link
            href="/dashboard/admin"
            className={clsx("text-dashboard li-hover ", {
              "li-static": pathname === "/dashboard/admin",
            })}
          >
            در انتظار تایید
          </Link>
        )}
        <Link
          href="/dashboard/register-ad"
          className={clsx("text-dashboard li-hover ", {
            "li-static": pathname === "/dashboard/register-ad",
          })}
        >
          ثبت اگهی
        </Link>
        <LogutButton />
      </aside>
      <div
        onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
        className="mr-4 mb-2 hidden max-md:inline-block relative"
      >
        {isShowMenuMobile ? <IoClose size={35} className=" animate-fade-in" color="red" /> : <IoMenu size={35}  />}
        {isShowMenuMobile && <MenuMobileDashboard role={role} />}
      </div>
      <main className="w-[80%] max-md:w-full max-md:p-2">{children}</main>
    </div>
  );
}

export default DashboardSideBar;
