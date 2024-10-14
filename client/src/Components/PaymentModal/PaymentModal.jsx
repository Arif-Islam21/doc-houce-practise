import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const PaymentModal = ({ setIsOpen, isOpen }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <DialogPanel className="max-w-md rounded-md bg-white p-12">
          <DialogTitle className="font-bold text-secondary">
            Hello Arif
          </DialogTitle>
          <Description className={"font-bold"}>
            Please Pay For Teeth Cleaning
          </Description>
          <p>
            Your Appointment:{" "}
            <span className="text-secondary">Nov 09, 2022</span> at 08.00 AM -
            08.30 AM
          </p>
          <h2 className="my-2 text-xl font-bold">Please Pay $200</h2>
          <hr />
          <input
            type="text"
            className="input rounded-md input-bordered shadow-sm w-full mt-4 border-2"
            placeholder="Card Number"
          />
          <input
            type="text"
            className="input rounded-md input-bordered shadow-sm w-full mt-4 border-2"
            placeholder="MM/YYYY/CVC"
          />
          <button
            className="btn w-full mt-4 bg-primary text-white font-bold hover:text-primary hover:border-2 hover:border-primary"
            onClick={() => setIsOpen(false)}
          >
            Pay
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PaymentModal;
