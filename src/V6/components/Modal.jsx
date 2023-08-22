import React from "react";
import { createPortal } from "react-dom";

export const Modal = ({ visible, onClose, heading, description }) => {
  if (!visible) return <></>;
  return createPortal(
    <div
      className="modal-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: "rgba(0,0,0, 0.3)",
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <h2>{heading}</h2>
      <div>{description}</div>
      <button onClick={() => onClose(false)}>close</button>
    </div>,
    document.getElementById("modal")
  );
};
