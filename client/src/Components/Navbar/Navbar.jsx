import { NavLink } from "react-router-dom";
import { FaBriefcaseMedical } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["Home", "About", "Appoinement", "Login"];
  const links = (
    <>
      {navItems.map((item, idx) => (
        <li key={idx} className="">
          <NavLink to={item} className={``}>
            {item}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div
      className={`transition-transform duration-300 ${
        isVisible ? "flex" : "hidden"
      } navbar fixed shadow-xl bg-black/50 top-0 left-0 md:px-16`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-xl">
          <span className="text-4xl">
            <FaBriefcaseMedical />
          </span>
          <span className="text-secondary">Doc</span> House
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
