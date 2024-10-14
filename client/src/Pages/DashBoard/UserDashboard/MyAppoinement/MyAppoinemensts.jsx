import { useState } from "react";
import DatePicker from "react-datepicker";
import PaymentModal from "../../../../Components/PaymentModal/PaymentModal";

const MyAppoinemensts = () => {
  const [startDate, setStartDate] = useState(new Date());
  let [isOpen, setIsOpen] = useState(false);
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
      <div className="mt-8 bg-white shadow-xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl text-black bg-gray-300">
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Treatment</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Ariful Islam</td>
                <td>20/12/2024</td>
                <td>6:14PM</td>
                <td>Cavity Protection</td>
                <td>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="btn px-6 font-bold bg-primary text-white hover:text-primary"
                  >
                    Pay
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              {/* <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr> */}
              {/* row 3 */}
              {/* <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr> */}
              <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAppoinemensts;
