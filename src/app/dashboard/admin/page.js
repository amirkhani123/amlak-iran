"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminPageT from "@/components/templates/AdminPageT";
import { getServerSession } from "next-auth";

async function page() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/signin");
    if (session.user.role !== "ADMIN") redirect("/dashboard");
    return <AdminPageT />;
  } catch {
    return (
      <div className="flex items-center justify-center w-full h-[50vh] text-black dark:text-white">
        <p>مشکلی پیش آمده است</p>
      </div>
    );
  }
}

export default page;
