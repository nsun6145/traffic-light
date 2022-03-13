import React from "react";
import "./styles.css";

const Bulb = ({ color }) => {
  return <div className="bulb" style={{ backgroundColor: color }}></div>;
};

export default Bulb;
