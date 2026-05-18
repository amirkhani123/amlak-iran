import { samim, vazirmatn } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import NextProviders from "@/providers/NextProviders";

export const metadata = {
  title: "املاک ایران",
  description: "سامانه خرید و اجاره ملک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.variable} ${samim.variable} dark:bg-gray-950 font-vazir`}
      >
        <NextProviders>
          <Layout>{children}</Layout>
        </NextProviders>
      </body>
    </html>
  );
}
