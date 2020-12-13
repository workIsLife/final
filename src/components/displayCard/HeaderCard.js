import React from "react";

export function HeaderCard(props) {
  return (
    <div class="card-header">
      <p>{props.author}</p>
      <p>raiting: {props.raiting}</p>
    </div>
  );
}
