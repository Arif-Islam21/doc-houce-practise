import { useState } from "react";
import background from "../../assets/background/appoinementBG.avif";
import image from "../../assets/background/doctorBG.avif";
import DatePicker from "react-datepicker";
import AvailableCategory from "./AvailableCategory";

const SelectAppoint = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[80vh]  hero"
    >
      <div className="hero-overlay bg-white bg-opacity-80"></div>
      <div className="pt-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full flex justify-center lg:justify-end items-start md:w-1/2">
            <DatePicker
              selected={startDate}
              closeOnScroll
              onChange={(date) => setStartDate(date)}
              className="input bg-gray-300 shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <img src={image} className="rounded-md" alt="" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h5 className="text-secondary font-bold">
            Available sit On {startDate && startDate.toDateString()}
          </h5>
          <h2 className="text-4xl font-bold">Please Select a service</h2>
        </div>
        <AvailableCategory />
      </div>
    </div>
  );
};

export default SelectAppoint;
