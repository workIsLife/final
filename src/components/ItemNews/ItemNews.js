import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DisplayComments from "./DisplayComments";
import "./commentStyle.css";
import Loader from "../Loader/Loader";

function Comments({ kids, comments }) {
  console.log("props comments", kids);
  if (!kids)
    return (
      <p style={{ textAlign: "center", fontSize: 40, margin: "0 5vw" }}>
        Doesn't have comments!
      </p>
    );
  return (
    <>
      <DisplayComments comments={comments} />
    </>
  );
}

function ItemNews(props) {
  if (props.isLoad) {
    return <Loader />;
  } else {
    let date = new Date(props.itemNews.time);
    return (
      <div className="item-news">
        <h3>{props.itemNews.title}</h3>
        <p>Raiting: {props.itemNews.score}</p>
        <p>
          Date: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}{" "}
          {date.getHours()}:{date.getMinutes()}
        </p>
        <p>Author: {props.itemNews.by}</p>
        <p>
          Ссылка: <a href={props.itemNews.url}>{props.itemNews.url}</a>
        </p>
        <button>
          <Link to="/">Go to Home</Link>
        </button>
        <p>Number of comments: {props.itemNews.descendants}</p>
        <Comments kids={props.itemNews.kids} comments={props.comments} />
      </div>
    );
  }
}
export default connect(
  (state, ownProps) => ({
    itemNews: state.itemData,
    comments: state.dataComments,
    isLoad: state.isLoad,
    ownProps
  }),
  (dispatch) => ({})
)(ItemNews);
