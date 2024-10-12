import DoctorProfile from "../DoctorProfile/DoctorProfile";
import DoctorHero from "../Hero/DoctorHero";

const DoctorHome = () => {
  return (
    <div className="bg-base-200 min-h-screen border">
      <DoctorHero />
      <DoctorProfile />
    </div>
  );
};

export default DoctorHome;
