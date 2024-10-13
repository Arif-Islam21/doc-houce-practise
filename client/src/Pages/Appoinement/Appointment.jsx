import DoctorHero from "../../Components/Hero/DoctorHero";
import AvailableSlots from "./AvailableSlots/AvailableSlots";
import SelectAppoint from "./SelectAppoint";

const Appointment = () => {
  return (
    <div>
      <DoctorHero title="Appoinement" />
      <SelectAppoint />
      <AvailableSlots />
    </div>
  );
};

export default Appointment;
