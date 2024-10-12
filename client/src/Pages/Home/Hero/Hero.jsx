import Button from "../../../Components/Button/Button";
import doctor1 from "../../../assets/doctors/doctor1.avif";
import doctor2 from "../../../assets/doctors/doctor2.avif";
import doctor3 from "../../../assets/doctors/doctor3.avif";

const Hero = () => {
  return (
    <div className="hero md:px-16 py-16 bg-primary text-white min-h-[85vh]">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="w-full pt-10 lg:pt-0  md:w-1/2">
          <div className="relative h-[70vh]">
            <img
              src={doctor1}
              className="max-w-sm absolute top-0 left-0 size-40 lg:size-72 rounded-md shadow-xl"
            />
            <img
              src={doctor2}
              className="max-w-sm absolute -bottom-12 left-[50%] -translate-x-1/2 size-40 lg:size-72 rounded-md shadow-xl"
            />
            <img
              src={doctor3}
              className="max-w-sm absolute -top-4 z-20 right-0 size-40 lg:size-72 rounded-md shadow-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold">Your Best Medical Help Center</h1>
          <p className="py-6">
            Here we provide world's first class first service. If you have any
            doubt , you can come and check up from here. If it not work we
            ensure money back guarenty
          </p>
          <div className="justify-end flex pr-12">
            <Button text={"All Services"} type={"secondary"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
