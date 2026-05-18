import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyAdsPageT from "@/components/templates/MyAdsPageT";
import { getServerSession } from "next-auth";
async function page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <MyAdsPageT email={session.user.email} />
    </>
  );
}

export default page;
