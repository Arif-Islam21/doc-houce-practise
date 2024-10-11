import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ image, name, text }) => {
  return (
    <div className="text-black border rounded-md border-gray-400 h-full mx-2 md:mx-6 pt-2 md:pt-12">
      <div className="flex justify-around items-center">
        <div className="flex gap-4 items-center">
          <img
            src={image}
            className="size-20 rounded-full border-2 border-secondary"
            alt=""
          />
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{text}</p>
          </div>
        </div>
        <div className="text-5xl text-secondary">
          <FaQuoteRight />
        </div>
      </div>
      <div>
        <p className="max-w-lg mx-auto mt-2 lg:mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ullam
          dolores reiciendis sint soluta eveniet, libero laudantium, nostrum,
          dolorem consequatur eligendi aliquid a cum voluptate magnam quod.
          Quaerat, deleniti tempore.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
