import Button from "../../../Components/Button/Button";

const Hero = () => {
  return (
    <div className="hero md:px-16 bg-primary min-h-[70vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full md:w-1/2">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold">Your Best Medical Help Center</h1>
          <p className="py-6">
            Here we provide world's first class first service. If you have any
            doubt , you can come and check up from here. If it not work we
            ensure money back guarenty
          </p>
          <Button text={"All Services"} type={"secondary"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
