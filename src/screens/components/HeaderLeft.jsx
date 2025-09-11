import React from "react";
import "../../styles/HeaderLeft.css";

export default function HeaderLeft({title, description}) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}
