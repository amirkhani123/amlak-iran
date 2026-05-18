import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/components/templates/SigninPageT";
import { getServerSession } from "next-auth";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <>
      <SigninPage />
    </>
  );
}

export default Signin;
