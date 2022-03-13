import React, { useState } from "react";
import bulbData from "./bulbData.js";
import Button from "./components/Button";
import Bulb from "./components/Bulb";

export default function App() {
  const [bulb, setBulb] = useState(undefined);

  const handleButton = (e) => {
    console.log("clicked!");
    setBulb(e);
  };

  const buttons = bulbData.map((button, index) => {
    return (
      <Button text={button.text} id={button.id} handleButton={handleButton} />
    );
  });

  const bulbs = bulbData.map((bulbs, index) => {
    return <Bulb color={bulb === bulbs.id ? bulbs.color : "black"} />;
  });

  return (
    <div className="App">
      <section>
        <div id="control-panel">{buttons}</div>
        <div id="traffic-lights">{bulbs}</div>
      </section>
    </div>
  );
}
