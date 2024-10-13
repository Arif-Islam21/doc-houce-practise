import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { TbMedicalCrossCircle } from "react-icons/tb";

const AppoineModal = ({ isOpen, handleClose: close, time }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex justify-between my-3">
              <h2 className="text-2xl font-bold">Cavity Protection</h2>
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-primary text-xl py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={close}
              >
                <TbMedicalCrossCircle />
              </Button>
            </div>
            <form onSubmit={close}>
              <input
                type="text"
                className="input w-full my-1 bg-gray-400 placeholder:text-white"
                placeholder="Required Date"
              />
              <input
                type="text"
                className="input w-full my-1 bg-gray-400 placeholder:text-white"
                placeholder={time}
              />
              <input
                type="text"
                className="input w-full my-1 bg-white input-bordered placeholder:text-gray-400"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="input w-full my-1 bg-white input-bordered placeholder:text-gray-400"
                placeholder={time}
              />
              <input
                type="text"
                className="input w-full my-1 bg-white input-bordered placeholder:text-gray-400"
                placeholder={time}
              />
              <button
                type="submit"
                className="bg-primary w-full text-white btn"
              >
                Submit
              </button>
            </form>

            <div className="mt-4"></div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AppoineModal;
