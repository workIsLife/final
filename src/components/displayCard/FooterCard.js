import React from "react";
import { Link } from "react-router-dom";

export function FooterCard(props) {
  this.date = new Date(props.time);
  return (
    <div className="card-footer">
      <p>
        {this.date.getDay()}.{this.date.getMonth() + 1}.
        {this.date.getFullYear()}::{this.date.getHours()}:
        {this.date.getMinutes()}
      </p>
      <p onClick={() => props.toClick(props.id)}>
        <Link to={`/item/${props.id}`}>Detail</Link>
      </p>
    </div>
  );
}
