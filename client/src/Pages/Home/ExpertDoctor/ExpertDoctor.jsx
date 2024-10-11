import DoctorCard from "../../../Components/DoctorCard/DoctorCard";
import SectionTitle from "../../../Components/SectionTitle";

const ExpertDoctor = () => {
  return (
    <div className="text-black">
      <SectionTitle
        heading={"Our Expert Doctor"}
        subHeading={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quis rem sed hic doloribus unde odio repudiandae accusantium accusamus in? Asperiores commodi natus sequi voluptatem rem quo dolore molestiae. Optio."
        }
      />
      <div className="lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
};

export default ExpertDoctor;
