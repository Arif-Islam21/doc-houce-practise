import { useState } from "react";
import DatePicker from "react-datepicker";

const MyAppoinemensts = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between">
        <h2 className="lg:text-3xl font-bold">My Appointments: 06</h2>
        <div className="flex">
          <DatePicker
            selected={startDate}
            className="input input-bordered bg-gray-300 py-4"
            calendarClassName="flex justify-center"
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <div className="mt-8 bg-white pb-6 shadow-xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl text-black bg-gray-300">
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppoinemensts;
