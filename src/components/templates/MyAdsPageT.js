"use client";
import { useEffect, useState } from "react";
import MyAdsCard from "./MyAdsCard";
import { useRouter } from "next/navigation";

function MyAdsPageT({ email }) {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchProfiles = async () => {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/profiles/${email}`
      );
      const data = await res.json();
      setIsLoading(false);
      setProfiles(data);
    };
    fetchProfiles();
  }, [email]);
  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center ">
        <div className="size-40 border-blue-600 border-[5px] border-dotted border-l-transparent  border-r-transparent rounded-full animate-rotate"></div>
      </div>
    );
  } else if (!profiles.length) {
    return (
      <div className="flex items-center justify-between text-center w-full h-[75%]  ">
        <h2 className="text-red-500 font-normal text-center   text-2xl w-full">
          هیچ آگهی ثبت نشده است ! 😒
        </h2>
      </div>
    );
  }

  return (
    <div>
      {profiles.map((data) => (
        <MyAdsCard data={data} key={data._id} />
      ))}
    </div>
  );
}

export default MyAdsPageT;
