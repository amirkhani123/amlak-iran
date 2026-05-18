"use client";
import { useEffect, useState } from "react";
import TextInput from "../modules/TextInput";
import RadioButton from "../modules/RadioButton";
import TextList from "../modules/TextList";
import CustomDatePicker from "../modules/CustomDatePicker";
import actionRegisterAd from "@/actions/actionRegisterAd";
import toast from "react-hot-toast";
import Loader from "../modules/Loader";
import { useRouter } from "next/navigation";

function RegisterAdPage({ profile }) {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const editeHandler = async () => {
    const res = await fetch(`/api/profiles`, {
      method: "PUT",
      body: JSON.stringify({ ...profileData, _id: profile._id }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.type === "success") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  useEffect(() => {
    if (profile) {
      setProfileData(profile);
    }
  }, [profile, router]);
  return (
    <div>
      <h3 className="w-[800px] bg-blue-500 text-white p-2 rounded-md text-lg font-light max-md:w-full">
        {!profile ? "ثبت آگهی" : "ویرایش آکهی"}
      </h3>
      <TextInput
        title="عنوان"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textArea="true"
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت (تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="املاک"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioButton profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="قوانین"
        profileData={profileData}
        name="rules"
        setProfileData={setProfileData}
      />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        name="amenities"
        setProfileData={setProfileData}
      />
      <CustomDatePicker
        setProfileData={setProfileData}
        profileData={profileData}
      />
      {profile ? (
        <button
          className={
            "font-light  text-lg p-1 border border-green-500 rounded-md text-green-500 w-full my-5  text-center flex items-center justify-center  transition-all duration-500 ease-in hover:bg-green-500 hover:text-second"
          }
          onClick={editeHandler}
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          onClick={async () => {
            setIsPending(true);
            const { message, type } = await actionRegisterAd(profileData);
            setIsPending(false);
            if (type == "success") {
              toast.success(message);
              router.push("/dashboard/my-ads");
            } else {
              toast.error(message);
            }
          }}
          disabled={isPending}
          className={`font-light  text-lg p-1 bg-primary rounded-md text-white w-full my-5 button-hover text-center flex items-center justify-center ${
            isPending && "bg-white "
          }`}
        >
          {isPending ? <Loader /> : "ثبت آگهی"}
        </button>
      )}
    </div>
  );
}

export default RegisterAdPage;
