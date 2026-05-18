"use client";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { IoShareSocialOutline } from "react-icons/io5";

function ButtonShare() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard
      text={url}
      onCopy={() => {
        toast.success("لینک با موفقیت کپی شد 😀");
      }}
    >
      <div className="box-sidbar">
        <p className="p cursor-pointer my-transitian hover:text-blue-700 font-ligth">
          <IoShareSocialOutline color="#1d4ed8" />
          اشتراک گذاری
        </p>
      </div>
    </CopyToClipboard>
  );
}

export default ButtonShare;
