import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterAdPage from "@/components/templates/RegisterAdPage";
import modelProfile from "@/models/profile";
import connectDB from "@/utils/connections";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page({ params: { adsId } }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  let profile = await modelProfile.findOne({ _id: adsId });
  profile = JSON.parse(JSON.stringify(profile));
  return (
    <div>
      <RegisterAdPage profile={profile} />
    </div>
  );
}

export default page;
