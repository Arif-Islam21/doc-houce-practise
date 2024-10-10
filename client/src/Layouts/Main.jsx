import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-primary">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <p>Footer</p>
    </div>
  );
};

export default Main;
