import { useState } from "react";
import image from "../../../assets/dental/image2.jfif";
import Button from "../../../Components/Button/Button";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AppoineModal from "../../../Components/AppoinementModal/AppoineModal";

const AvailableCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePopUp = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

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
          <Button
            onPress={handlePopUp}
            text="Book Appoinement"
            type="secondary"
          />
        </div>
      </div>
      <AppoineModal
        time="8:00AM - 9:00PM"
        handleClose={handleClose}
        isOpen={isOpen}
      />
    </div>
  );
};

export default AvailableCard;
