import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";
import InfoCards from "../../../Components/InfoCards";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 lg:mx-16">
      <InfoCards
        icon={<FaClock />}
        heading={"Opening Hours"}
        subHeading={"Open 9.00 am to 5.00pm Everyday"}
      />
      <InfoCards
        icon={<FaLocationArrow />}
        heading={"Our Location"}
        subHeading={"Nilphamari Sadar , Bangladesh"}
      />
      <InfoCards
        icon={<FaPhone />}
        heading={"Contact Us"}
        subHeading={"01833668024"}
      />
    </div>
  );
};

export default Info;
