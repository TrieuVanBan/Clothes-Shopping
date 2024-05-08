import React from "react";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`w-[100%] h-[100%] top-0 fixed flex justify-center items-center transition-colors ${open ? "visible bg-black/70" : "invisible"
        }`}
      onClick={onClose}
    >
      <div
        className={`w-[50%] bg-white rounded-lg shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 px-2 py-1 border border-neutral-200 rounded-md text-gray-300 bg-white hover:bg-gray-50 hover:text-gray-500"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
