import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="modal-overlay fixed inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="modal-content relative bg-white text-gray-900 rounded-lg shadow-lg p-2  w-3/4 md:w-1/2 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer p-2 top-2 right-2 text-gray-500  transition-colors duration-200"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
