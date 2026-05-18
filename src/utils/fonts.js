import localFont from "next/font/local";
const vazirmatn = localFont({
  src: [
    {
      path: "../../public/fonts/Vazirmatn-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Vazirmatn-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});
const samim = localFont({
  src: [
    {
      path: "../../public/fonts/Samim-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Samim-Medium-FD.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Samim-FD.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sahim",
});
export { vazirmatn, samim };
