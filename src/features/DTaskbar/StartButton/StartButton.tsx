import React from "react";
import XP from "../../../assets/images/xp.png";
import "./StartButton.css";

const StartButton = () => {
  return (
    <div className="start_button">
      {" "}
      <img src={XP} alt="Windows XP Logo" width={24} height={24} />
      <p>Start</p>
    </div>
  );
};

export default StartButton;
