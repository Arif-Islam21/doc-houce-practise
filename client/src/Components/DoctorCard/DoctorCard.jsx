import doctor1 from "../../assets/doctors/doctor4.avif";
import Rating from "react-rating";
import { CiCalendar, CiDollar, CiLocationArrow1, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const DoctorCard = () => {
  return (
    <div className="card bg-base-100 border border-gray-400 rounded-md shadow-xl">
      <figure className="p-4">
        <img src={doctor1} className=" rounded-md" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Md: Ariful Islam</h2>
        <p>Junior Web Developer</p>
        <Rating
          className="text-2xl text-secondary"
          initialRating={4}
          readonly
          emptySymbol={<CiStar />}
          fullSymbol={<FaStar />}
        />
        <hr />
        <p className="flex items-center gap-3">
          <CiLocationArrow1 className="text-xl" />
          <span className="text-gray-500 font-semibold">
            Nilphamari Sadar, Bangladesh
          </span>
        </p>
        <p className="flex items-center gap-3">
          <CiCalendar className="text-xl" />
          <span className="text-gray-500 font-semibold">
            Available on, 34 March 2021
          </span>
        </p>
        <p className="flex items-center gap-3">
          <CiDollar className="text-xl" />
          <span className="text-gray-500 font-semibold">515</span>
        </p>
        <NavLink to="/DoctorProfile" className="card-actions justify-center">
          <Button text={"View Profile"} type={"primary"} />
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorCard;
