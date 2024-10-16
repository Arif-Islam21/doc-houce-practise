const InfoCards = ({ icon, heading, subHeading }) => {
  return (
    <div className="lg:px-12 text-white px-4 py-8 flex gap-4 items-center  duration-500 rounded-xl  bg-primary hover:bg-secondary">
      <div className="text-3xl">{icon}</div>
      <div>
        <h2 className="font-bold text-2xl">{heading}</h2>
        <p>{subHeading}</p>
      </div>
    </div>
  );
};

export default InfoCards;
