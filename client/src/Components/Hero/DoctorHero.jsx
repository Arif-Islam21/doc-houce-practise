import { useLocation } from "react-router-dom";
import image from "../../assets/background/bg.avif";

const DoctorHero = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className="hero relative min-h-[60vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-md absolute left-[10%] bottom-1/4">
          <p>Home {location.pathname}</p>
          <h1 className="mb-5 text-5xl font-bold">Doctor Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorHero;
