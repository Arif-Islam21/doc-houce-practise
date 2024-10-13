import background from "../../assets/background/doctorBG.avif";

const SelectAppoint = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[80vh] hero-overlay"
    ></div>
  );
};

export default SelectAppoint;
