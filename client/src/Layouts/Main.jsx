import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-xl relative z-10 mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-70px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
