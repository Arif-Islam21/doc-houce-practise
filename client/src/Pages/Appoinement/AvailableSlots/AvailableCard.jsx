import image from "../../../assets/dental/image2.jfif";
import Button from "../../../Components/Button/Button";

const AvailableCard = () => {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img
          src={image}
          alt="tooth image"
          className="rounded-full size-24 mt-6"
        />
      </figure>
      <div className="card-body text-center items-center">
        <h2 className="card-title">Teeth Orthodontics</h2>
        <p>8:00AM - 9:00PM</p>
        <div className="card-actions justify-center">
          <Button text="Book Appoinement" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default AvailableCard;
