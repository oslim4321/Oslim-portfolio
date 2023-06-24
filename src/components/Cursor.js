import React from "react";

const Cursor = () => {
  return (
    <div
      className="custom-cursor"
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default Cursor;
