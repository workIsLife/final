import React from "react";

import { mouseLeaveCard, mouseEnterCard } from "../eventApp";
import { HeaderCard } from "./HeaderCard";
import { BodyCard } from "./BodyCard";
import { FooterCard } from "./FooterCard";

export default function Card(props) {
  return (
    <div
      onMouseEnter={(e) => {
        this.onmouseeneter = mouseEnterCard(e.target);
      }}
      onMouseLeave={async (e) => {
        this.onmouseleave = mouseLeaveCard(e.target);
      }}
      className="card"
    >
      {console.log(props)}
      <HeaderCard author={props.content.by} raiting={props.content.score} />
      <BodyCard title={props.content.title} />
      <FooterCard
        toClick={props.detailNews}
        time={props.content.time}
        id={props.content.id}
      />
    </div>
  );
}
