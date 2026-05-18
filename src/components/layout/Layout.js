import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>
        <Toaster />
      </div>
      <div className="min-h-[700px]">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
