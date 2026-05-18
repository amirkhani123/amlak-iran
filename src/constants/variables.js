import { MdOutlineVilla } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GiPostOffice } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
const listFoter = [
  "تعرفه قانونی ",
  "دسترسی سریع",
  "مشاورین خبره",
  "قولنامه محضری",
];
const links = [
  { link: "/", text: "صفحه اصلی" },
  { link: "/buy-residentials", text: "آگهی ها" },
];
const categorys = [
  { apartment: "آپارتمان" },
  { villa: "ویلا" },
  { store: "مغازه" },
  { office: "اداره" },
];
const citys = ["باغ فیض", "پونک", " منطقه 22", " وردآورد"];
const icons = {
  villa: <MdOutlineVilla size={25} />,
  apartment: <PiBuildingApartmentFill size={25} />,
  store: <FaStore size={25} />,
  office: <GiPostOffice size={25} />,
};
const questions = [
  {
    id: 1,
    question: "چگونه در سایت ثبت نام کنیم ؟",
    answer:
      "در منوی بالای صفحه روی دکمه ورود کلیک کرده و در صفحه باز شده روی گزینه ثبت نام و تکمیل فرم ثبت نام و درمرحله بعد ورود",
  },
  {
    id: 2,
    question: "چگونه در سایت وارد حساب کاربری خود شوم ؟",
    answer:
      "بعد از ثبت نام و ورود به سایت در قسمت بالای صفحه در هدر سایت روی دکمه حساب کاربری کلیک کنید",
  },
  {
    id: 3,
    question: "چگونه در سایت آگهی ثبت کنم ؟",
    answer:
      "در قسمت حساب کاربری در منوی سمت چپ گزینه ثبت آگهی و فرم ها را تکمیل کنید",
  },
  {
    id: 4,
    question: "پنل آدمین سایت چگونه وارد شویم؟",
    answer: "در قسمت ورود با نام کاربری و گذرواژه admin1384",
  },
];
export { listFoter, links, categorys, citys, icons, questions };
