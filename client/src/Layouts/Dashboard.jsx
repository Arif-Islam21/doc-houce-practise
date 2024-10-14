import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdHistory, MdOutlineReviews } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

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
          } mt-16 hidden md:flex relative duration-700 flex-col gap-y-3 pl-8 pt-8 min-h-screen bg-white shadow-xl`}
        >
          <NavLink className={`flex gap-3 items-center`} to="Appoinemnts">
            <FaUserDoctor className="text-xl text-primary" />{" "}
            {isOpen && (
              <span className="delay-500 duration-300 transition-all ease-in">
                My Appoinement
              </span>
            )}
          </NavLink>
          <NavLink className={`flex gap-3 items-center`} to="Appoinemnts">
            <MdOutlineReviews className="text-xl text-primary" />{" "}
            {isOpen && (
              <span className="delay-500 duration-300 transition-all ease-in">
                My Reviews
              </span>
            )}
          </NavLink>
          <NavLink className={`flex gap-3 items-center`} to="Appoinemnts">
            <MdHistory className="text-xl text-primary" />{" "}
            {isOpen && (
              <span className="delay-500 duration-300 transition-all ease-in">
                My History
              </span>
            )}
          </NavLink>
          <NavLink className={`flex gap-3 items-center`} to="/">
            <FaHome className="text-xl text-primary" />{" "}
            {isOpen && (
              <span className="delay-500 duration-300 transition-all ease-in">
                Home
              </span>
            )}
          </NavLink>
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
        <div className="flex-grow mt-20 bg-base-200 md:pl-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
