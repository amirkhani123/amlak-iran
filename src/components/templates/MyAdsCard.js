"use client";
import Link from "next/link";
import Card from "../modules/Card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function MyAdsCard({ data }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/profiles/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.type === "success") {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className="w-full h-[270px] flex gap-5 border-blue-600 border-[2px] p-2 rounded-md m-1  max-md:flex-col max-md:items-center max-md:h-fit">
      <Card data={data} />
      <div className="flex items-center justify-between w-[65%] mt-[180px] max-md:w-full max-md:justify-between max-md:gap-2 max-md:mt-2">
        <Link
          className="border border-green-500 text-green-500 w-[270px] font-light p-2 rounded-md transition-all duration-500 ease-in hover:bg-green-500 hover:text-second text-center  "
          href={`/dashboard/my-ads/edit/${data._id}`}
        >
          ویرایش
        </Link>
        <button
          onClick={deleteHandler}
          className="border border-red-500 text-red-500 w-[270px] font-light p-2 rounded-md transition-all duration-500 ease-in hover:bg-red-500 hover:text-second "
        >
          حذف کردن
        </button>
      </div>
    </div>
  );
}

export default MyAdsCard;
