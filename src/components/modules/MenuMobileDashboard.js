import LogutButton from "../ui/LogutButton";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
function MenuMobileDashboard({ role }) {
  const pathname = usePathname();
  return (
    <ul className="w-40 flex  flex-col shadow-3xl rounded-md p-3 h-52 absolute z-10 bg-white dark:bg-black opacity-0  animate-fade-in-menu ">
      <p className="mt-px text-gray-700 text-[0.95rem] w-full text-center dark:text-white max-md:text-lg">
        {role === "ADMIN" ? "admin" : email}
      </p>
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
    </ul>
  );
}

export default MenuMobileDashboard;
