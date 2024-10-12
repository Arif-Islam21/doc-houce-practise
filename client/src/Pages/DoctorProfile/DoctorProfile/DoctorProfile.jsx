import Rating from "react-rating";
import doctor1 from "../../../assets/doctors/doctor3.avif";
import doctor2 from "../../../assets/doctors/doctor5.avif";
import { CiLocationArrow1, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Button from "../../../Components/Button/Button";

const DoctorProfile = () => {
  return (
    <div className="hero bg-white container my-12 mx-auto min-h-[75vh] rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor1}
          className="max-w-sm border shadow-md mr-2 rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">Dr. Adnan</h1>
          <h4>MBBS, MD-General Medicine</h4>
          <div className="flex items-center gap-2 py-3">
            <Rating
              className="text-2xl text-secondary"
              initialRating={4}
              readonly
              emptySymbol={<CiStar />}
              fullSymbol={<FaStar />}
            />
            (35)
          </div>
          <p className="flex items-center gap-3">
            <CiLocationArrow1 className="text-2xl" />
            <span>Nilphamari Sadar, Rangpur-</span>
            <span className="text-secondary font-bold ">Get Direction</span>
          </p>
          <div className="flex">
            <img
              src={doctor2}
              className="size-20 rounded-md my-3 mr-3"
              alt=""
            />
            <img
              src={doctor2}
              className="size-20 rounded-md my-3 mr-3"
              alt=""
            />
            <img
              src={doctor2}
              className="size-20 rounded-md my-3 mr-3"
              alt=""
            />
            <img
              src={doctor2}
              className="size-20 rounded-md my-3 mr-3"
              alt=""
            />
            <img
              src={doctor2}
              className="size-20 rounded-md my-3 mr-3"
              alt=""
            />
          </div>
          <div className="flex gap-3 mt-4">
            <Button text="Dentail Filling" type="primary" />
            <Button text="Teeth Whitening" type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
