import React from "react";

const Button = (props) => {
  return (
    <div onClick={() => props.handleButton(props.id)}>
      <h2 className="button">{props.text}</h2>;
    </div>
  );
};

export default Button;
