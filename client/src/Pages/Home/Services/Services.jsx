import doctor1 from "../../../assets/doctors/doctor5.avif";
import doctor2 from "../../../assets/doctors/doctor6.avif";

import Button from "../../../Components/Button/Button";

const Services = () => {
  return (
    <div className="hero text-black md:px-16 py-8 min-h-[60vh]">
      <div className="hero-content md:flex-row gap-3 relative flex-col lg:flex-row">
        <div className="md:w-1/2 min-h-[60vh] w-full">
          <img
            src={doctor1}
            className=" lg:w-1/2 max-w-[90vw] lg:-left-4 absolute top-0 bottom-0 lg:min-h-[100%] rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full max-w-[100vw] lg:w-1/2">
          <h1 className="text-5xl font-bold pt-6">Our Services</h1>
          <p className="py-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button text={"Cavity Protection"} type={"secondary"} />
            <Button text={"Cosmetic Dentisty"} type={"secondary"} />
            <Button text={"Oral Surgery"} type={"secondary"} />
          </div>
          <div className="py-4">
            <img
              src={doctor2}
              className="max-w-full max-h-[40vh] mx-auto rounded-xl"
              alt=""
            />
          </div>
          <h2 className="font-bold text-2xl ">Electro Gastrology Therapy</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error <br /> Sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button text={"More Details"} type={"secondary"} />
        </div>
      </div>
    </div>
  );
};

export default Services;
