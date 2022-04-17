import React from "react";

const Modal = ({ showModal, modalBody, setShowModal, modalTitle }) => {
  return (
    <div
      style={{ display: `${showModal ? "block" : "none"}`, zIndex: "30" }}
      className="modal"
    >
      <div className="modal-content bg-white">
        <div
          style={{ backgroundColor: "#090b13" }}
          className="modal-header flex justify-between align-items-center text-white p-5"
        >
          <h4 className="h4 text-white text-lg"> {modalTitle} </h4>
          <span
            onClick={() => setShowModal(false)}
            className="modal-close text-rose-500 text-hover-rose-300"
          >
            ×
          </span>
        </div>
        <div className="modal-body p-5"> {modalBody} </div>
      </div>
    </div>
  );
};

export default Modal;
