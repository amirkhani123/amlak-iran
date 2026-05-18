"use client";
import { SessionProvider } from "next-auth/react";

function NextProviders({ children }) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}

export default NextProviders;
