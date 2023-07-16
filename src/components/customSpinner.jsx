import React from "react";
import { Spinner } from "react-bootstrap";

const CustomSpinner = () => {
  const bouncerStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    zIndex: "99999",
    color: "#005288",
    height: "50px",
    width: "50px",
  };
  return <Spinner style={bouncerStyle} />;
};

export default CustomSpinner;
