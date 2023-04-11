import { useState, useContext, createContext } from "react";

const ModalContext = createContext(false);
const ToggleModalContext = createContext<(() => void)>(() => null);

export const useModalContext = () => {
  return useContext(ModalContext)
}
export const useToggleModal = () => {
  return useContext(ToggleModalContext)
}

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={isOpen}>
      <ToggleModalContext.Provider value={toggleModal}>
        {children}
      </ToggleModalContext.Provider>
    </ModalContext.Provider>
  );
};
