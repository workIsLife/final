import React from "react";
import { Link } from "react-router-dom";

export function FooterCard(props) {
  const date = new Date(props.time);
  return (
    <div className="card-footer">
      <p>
        {date.getDay()}.{date.getMonth() + 1}.
        {date.getFullYear()}::{date.getHours()}:
        {date.getMinutes()}
      </p>
      <p onClick={() => props.toClick(props.id)}>
        <Link to={`/item/${props.id}`}>Detail</Link>
      </p>
    </div>
  );
}
