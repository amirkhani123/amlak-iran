import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";
import { Suspense } from "react";
import Loader from "../modules/Loader";

function Layout({ children }) {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <div>
          <Toaster />
        </div>
        <div className="min-h-[700px]">{children}</div>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
