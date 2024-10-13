import AvailableCard from "./AvailableCard";

const AvailableSlots = () => {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center">
        Available Slots for teeth Orthodontics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AvailableCard />
        <AvailableCard />
        <AvailableCard />
        <AvailableCard />
        <AvailableCard />
        <AvailableCard />
      </div>
    </div>
  );
};

export default AvailableSlots;
