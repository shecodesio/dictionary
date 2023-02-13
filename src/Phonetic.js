import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h2>{props.phonetic}</h2>
      </div>
    );
  } else {
    return null;
  }
}
