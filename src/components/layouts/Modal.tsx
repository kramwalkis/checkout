import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useModalContext, useToggleModal } from "../../context/modalContext";

const ModalPortal = () => {
  const isOpen = useModalContext();
  const toggleModal = useToggleModal();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        toggleModal();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  const modalContent = (
    <>
      {isOpen && (
        <>
          <div className="text-white h-11 w-fit px-6 font-bold rounded border-2 border-green-800 flex items-center justify-center bg-yellow-500 fixed bottom-5 right-4 z-50">
            <span>Purchase was succescfull!</span>
          </div>
        </>
      )}
    </>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default ModalPortal;
