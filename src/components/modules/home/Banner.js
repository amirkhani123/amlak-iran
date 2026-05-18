import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaPlus, FaSearch } from "react-icons/fa";

function Banner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C2E7FC] to-[#EAF7FF] px-8 py-8 flex items-center justify-between gap-8 max-md:flex-col max-md:text-center">
      <div className="font-sahim max-w-lg">
        <h1 className="text-3xl font-bold mb-3 text-primary">
          املاکی به وسعت ایران
        </h1>

        <p className="text-sm leading-7 text-primary opacity-75 mb-6">
          خرید و فروش ملک را ساده‌تر کرده‌ایم. در املاک ایران می‌توانید به راحتی
          ملک خود را ثبت کنید یا بهترین گزینه‌ها را پیدا کنید.
        </p>

        <div className="flex gap-3 max-md:justify-center">
          <Link
            href="/dashboard"
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:scale-105 transition flex items-center gap-2"
          >
            <FaPlus className="text-xs" />
            همین الان آگهی ثبت کن!
          </Link>

          <Link
            href="/buy-residentials"
            className="border border-primary text-primary px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition flex items-center gap-2"
          >
            <FaSearch className="text-xs" />
            مشاهده آگهی‌ها
          </Link>
        </div>

        <div className="flex gap-6 mt-6 text-xs text-primary max-md:justify-center max-sm:flex-col max-sm:gap-3">
          <p className="flex items-center gap-1.5">
            <FaCheckCircle className="text-green-500" />
            بیش از ۵۰۰ آگهی
          </p>

          <p className="flex items-center gap-1.5">
            <FaCheckCircle className="text-green-500" />
            کاربران فعال
          </p>

          <p className="flex items-center gap-1.5">
            <FaCheckCircle className="text-green-500" />
            ثبت آسان
          </p>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full"></div>
        <Image
          src="/images/home.png"
          width={320}
          height={260}
          alt="banner"
          priority
          className="relative w-[260px] drop-shadow-sm rounded-xl"
        />
      </div>
    </div>
  );
}

export default Banner;
