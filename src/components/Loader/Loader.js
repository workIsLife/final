import React from "react";
import "./loaderStyle.css";
export default function Loader() {
  return (
    <div className="loader">
      <div className="circ">
        <div className="load">Loading . . . </div>
        <div className="hands"></div>
        <div className="body"></div>
        <div className="head">
          <div className="eye"></div>
        </div>
      </div>
    </div>
  );
}
