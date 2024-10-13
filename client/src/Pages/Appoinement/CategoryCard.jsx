import image1 from "../../assets/dental/image1.avif";

const CategoryCard = () => {
  return (
    <div className="max-w-sm shadow-xl gap-3 justify-center py-3 border rounded-md flex items-center">
      <img src={image1} className="size-24 ml-6 rounded-md" alt="" />
      <div>
        <h2 className="text-4xl font-bold">Teeth Orthodontics</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
