import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-12 border-2">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <p>Footer</p>
    </div>
  );
};

export default Main;
