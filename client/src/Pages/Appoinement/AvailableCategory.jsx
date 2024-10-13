import CategoryCard from "./CategoryCard";

const AvailableCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default AvailableCategory;
