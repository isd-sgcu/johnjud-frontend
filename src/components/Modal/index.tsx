/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { Fragment } from "react";

interface ModalProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  button: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const { title, icon, children, open, setOpen, button } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-[2000] overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform space-y-4 overflow-hidden rounded-lg bg-white p-8 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:align-middle">
              <div className="flex flex-row justify-center gap-2">
                <Dialog.Title className="text-xl font-semibold text-primary">
                  {title}
                </Dialog.Title>
                {icon && <Icon icon={icon} className="text-2xl text-primary" />}
              </div>
              <div className="text-center">{children}</div>
              <div className="flex flex-row items-center justify-center gap-2">
                {button}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
