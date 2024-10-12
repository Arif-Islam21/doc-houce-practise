import { useState } from "react";
import { CiLocationArrow1, CiPhone } from "react-icons/ci";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const Contact = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(`10:00`);

  return (
    <div className="hero bg-primary my-6 rounded-md min-h-[70vh]">
      <div className="hero-content w-full md:px-16 flex-col lg:flex-row">
        <div className="text-center w-full md:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Contact With Us</h1>
          <p className="py-6 max-w-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <p className="flex items-center gap-4">
            <CiPhone className="text-3xl" />
            <span>+088 0183 3668024</span>
          </p>
          <p className="flex items-center gap-4">
            <CiLocationArrow1 className="text-3xl" />
            <span>Nilphamari Sadar, Bangladesh</span>
          </p>
        </div>
        <div className="card bg-primary w-full md:w-2/3 shrink-0">
          <form className="card-body">
            <div className="form-control grid grid-cols-1 gap-4 md:grid-cols-2 ">
              <input
                type="text"
                placeholder="Name"
                className="input bg-[#133D39] text-[#FFFFFF] font-bold input-bordered"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input bg-[#133D39] text-[#FFFFFF] font-bold input-bordered"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="input bg-[#133D39] text-[#FFFFFF] font-bold input-bordered"
                required
              />
              <input
                type="text"
                placeholder="Doctor Name"
                className="input bg-[#133D39] text-[#FFFFFF] font-bold input-bordered"
                required
              />
              <DatePicker
                selected={startDate}
                dateFormat="yyyy/MM/dd"
                onChange={(date) => setStartDate(date)}
                className="input bg-[#133D39] text-white font-bold input-bordered w-full"
                withPortal
              />
              <TimePicker onChange={onChange} value={value} />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
