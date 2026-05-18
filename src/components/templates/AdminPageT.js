"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";

function AdminPageT() {
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin`);
      const { data, type } = await res.json();
      setIsLoading(false);
      if (type === "success") {
        setProfiles(data);
      } else {
        toast.error("مشکلی در دریافت دیتا پیش آمده است");
      }
    };
    fetchData();
  }, []);
  const publishedHandler = async (_id) => {
    const res = await fetch("/api/profiles", {
      method: "PATCH",
      body: JSON.stringify({ _id }),
      headers: { "Contetn-Type": "application/json" },
    });
    const result = await res.json();
    if (result.type === "success") {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  const deleteHandler = async (_id) => {
    const res = await fetch(`/api/profiles/delete/${_id}`, {
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
  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center ">
        <div className="size-40 border-blue-600 border-[5px] border-dotted border-l-transparent  border-r-transparent rounded-full animate-rotate"></div>
      </div>
    );
  } else if (!profiles.length)
    return (
      <h2 className="text-red-500 font-normal text-center mt-8  text-2xl ">
        هیچ آگهی در انتظار تایید نیست !
      </h2>
    );
  return (
    <div>
      {profiles.map((i) => (
        <div
          key={i._id}
          className="flex items-center justify-between  border-b-primary border-b-[2px] p-1 "
        >
          <p className="font-light text-lg">{i.title}</p>
          <div className="flex justify-between w-[330px] ">
            <Link
              href={`/buy-residentials/${i._id}`}
              className="w-[100px] p-1 px-2 bg-yellow-400 text-second font-normal text-center rounded-lg  button-hover"
            >
              نمایش
            </Link>
            <button
              className="w-[100px] p-1 px-2 bg-green-400 text-second font-normal text-center rounded-lg  button-hover"
              onClick={() => publishedHandler(i._id)}
            >
              انتشار
            </button>
            <button
              className="w-[100px] p-1 px-2 bg-red-400 text-second font-normal text-center rounded-lg  button-hover"
              onClick={() => deleteHandler(i._id)}
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPageT;
