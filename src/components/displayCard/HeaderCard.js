import React from "react";

export function HeaderCard(props) {
  return (
    <div className="card-header">
      <p>{props.author}</p>
      <p>raiting: {props.raiting}</p>
    </div>
  );
}
