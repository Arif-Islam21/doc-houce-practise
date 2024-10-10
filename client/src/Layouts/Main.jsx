import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-screen-xl relative z-10 mx-auto">
      <Navbar />

      <div>
        <Outlet />
      </div>
      <p>Footer</p>
    </div>
  );
};

export default Main;
