import { FaArrowCircleLeft } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import { icons } from "@/constants/variables";
function Card({ data: { title, location, price, category, _id } }) {
  const myPrice = Number(price);

  return (
    <div className="w-[220px] h-[240px] border p-2 border-blue-700 rounded-md max-sm:w-full max-sm:flex max-sm:items-center max-sm:flex-col ">
      <div className="bg-blue-200 w-fit p-1 text-blue-800 rounded-md">
        {icons[category]}
      </div>
      <p className=" text-base font-light my-2 ">{title}</p>
      <p className="flex items-center gap-1 text-gray-700 my-1 mr-px">
        <GrLocation size={20} />
        {location}
      </p>
      <p className=" text-gray-700 my-2 mr-px font-light">
        {myPrice.toLocaleString("fa-IR")} تومان
      </p>
      <Link
        href={`/buy-residentials/${_id}`}
        className="flex items-center justify-between text-primary mt-5"
      >
        مشاهده آگهی
        <FaArrowCircleLeft />
      </Link>
    </div>
  );
}

export default Card;
