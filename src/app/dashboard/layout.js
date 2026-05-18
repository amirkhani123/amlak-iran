"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardSideBar from "@/components/layout/DashboardSideBar";
async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <DashboardSideBar role={session.user.role} email={session.user.email}>
      {children}
    </DashboardSideBar>
  );
}

export default Layout;
