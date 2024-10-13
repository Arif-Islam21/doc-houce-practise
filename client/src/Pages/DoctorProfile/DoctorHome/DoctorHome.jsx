import DoctorProfile from "../DoctorProfile/DoctorProfile";
import DoctorHero from "../../../Components/Hero/DoctorHero";

const DoctorHome = () => {
  return (
    <div className="bg-base-200 min-h-screen border">
      <DoctorHero title="Doctor Profile" />
      <DoctorProfile />
    </div>
  );
};

export default DoctorHome;
