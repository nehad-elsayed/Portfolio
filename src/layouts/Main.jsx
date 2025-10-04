import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme={"system"} className="relative">
      <NavBar />
      <Outlet />
      <div className="bg-[#201b2a] dark:bg-[#1D232A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
