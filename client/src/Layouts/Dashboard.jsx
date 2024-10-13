import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";

const Dashboard = () => {
  const [isOpen, setIsopen] = useState(true);
  const navItems = ["Home", "About", "Appoinemnts", "Reviews", "Contact-Us"];
  return (
    <div className="bg-base-200">
      <Navbar navItems={navItems} />
      <div className="flex">
        <div
          className={`${
            isOpen ? "w-56" : "w-20"
          } mt-16 flex relative duration-700 flex-col gap-y-3 pl-8 pt-8 min-h-screen bg-white shadow-xl`}
        >
          <NavLink className={`flex gap-3 items-center`} to="Appoinemnts">
            <FaUserDoctor /> My Appoinement
          </NavLink>
          <NavLink to="Appoinemnts">My Reviews</NavLink>
          <NavLink to="Appoinemnts">My History</NavLink>
          <NavLink to="/">Home</NavLink>
          <button
            onClick={() => setIsopen(!isOpen)}
            className="absolute top-3 right-0 duration-700 translate-x-1/2"
          >
            {!isOpen ? (
              <IoIosArrowDropleftCircle className="text-4xl" />
            ) : (
              <IoIosArrowDropleftCircle className="text-4xl rotate-180 duration-700" />
            )}
          </button>
        </div>
        <div className="flex-grow mt-16 pl-8">
          <Outlet />
          <p>there will be main content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
