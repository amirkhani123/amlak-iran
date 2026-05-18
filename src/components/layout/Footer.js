"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

function Footer() {
  const quickLinks = [
    { title: "خرید آپارتمان", href: "/buy-residentials?category=apartment" },
    { title: "خرید ویلا", href: "/buy-residentials?category=villa" },
    { title: "اجاره ملک", href: "/rent-residentials" },
    { title: "مشاورین املاک", href: "/consultants" },
  ];

  const supportLinks = [
    { title: "درباره ما", href: "/about" },
    { title: "تماس با ما", href: "/contact" },
    { title: "قوانین و مقررات", href: "/rules" },
    { title: "سوالات متداول", href: "/faq" },
  ];

  return (
    <footer className="relative mt-10 overflow-hidden rounded-2xl border  bg-primary backdrop-blur text-white">
      <div className="h-1 w-full text-white" />

      <div className="grid gap-8 px-5 py-8 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-extrabold tracking-tight ">
            سامانه خرید و اجاره ملک
          </h3>
          <p className="mt-3 max-w-xl leading-7 text-sm text-white">
            پلتفرم هوشمند جستجو، خرید و اجاره ملک با اطلاعات دقیق، تصاویر کامل و
            ارتباط سریع با مشاورین. تجربه‌ای ساده، امن و حرفه‌ای برای انتخاب
            خانه‌ی بعدی شما.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              <FaPhoneAlt className="text-emerald-500" />
              ۰۲۱-۱۲۳۴۵۶۷۸
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              <MdEmail className="text-blue-500" />
              support@amlak.com
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              <FaMapMarkerAlt className="text-rose-500" />
              تهران، ایران
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold text-white">دسترسی سریع</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-white transition "
                >
                  <HiArrowUpRight className="text-xs opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold text-white">پشتیبانی</h4>
          <ul className="space-y-2">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-white transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-cyan-400"
                >
                  <HiArrowUpRight className="text-xs opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <p className="mb-2 text-xs text-white dark:text-zinc-400">
              شبکه‌های اجتماعی
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-2 text-white transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-500 dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-2 text-white transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-500 dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaTelegramPlane />
              </Link>
              <Link
                href="#"
                className="rounded-xl border border-zinc-200 p-2 text-white transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-zinc-700 dark:text-zinc-300"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 border-t border-zinc-200/80 px-5 py-4 text-xs text-white dark:border-zinc-800 dark:text-zinc-400 md:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} تمامی حقوق برای سامانه املاک محفوظ است.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            حریم خصوصی
          </Link>
          <span className="h-1 w-1 rounded-full text-white" />
          <Link
            href="/terms"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            شرایط استفاده
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
