import React from "react";
import "./Zodiac.css";
export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <img
        src={`${process.env.PUBLIC_URL}/signs/${props.name}.png`}
        alt={props.name}
      />
      <span>{props.name}</span>
      <span>{props.dates}</span>
    </div>
  );
}
