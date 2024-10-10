const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center text-black mt-8">
      <h2 className="text-3xl lg:text-5xl font-bold">{heading}</h2>
      <p className="max-w-md mx-auto">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
