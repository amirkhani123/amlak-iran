"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mx-5">
      <h3 className="font-light text-lg text-gray-700  dark:text-second">
        سلام 👋
      </h3>
      <p className="font-light text-lg text-gray-700 my-2  dark:text-second">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="font-light text-lg text-second flex items-center gap-1 mt-11 bg-primary w-fit p-1 rounded-md ">
        <p>تاریخ عضویت :</p>
        <span>
          {new Date(session.user.createAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default page;
