import React from "react";
import "../../styles/CustomCard.css";

const CustomCard = ({ title, amount }) => {
  return (
    <div className="custom-card">
      <h3 className="custom-title">{title}</h3>
      <p className="custom-amount">{amount}</p>
    </div>
  );
};

export default CustomCard;
