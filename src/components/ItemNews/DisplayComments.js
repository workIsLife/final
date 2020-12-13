import React from "react";
import { connect } from "react-redux";
import { getComments } from "../../action/getComments";

function DisplayComments({ comments, expandComment, oldState }) {
  //console.log("display", props.comments);
  //const tag = document.createElement("li");
  const commentsHTML = [];
  console.log("html", commentsHTML[0]);
  return (
    <ul className="comments-list">
      {comments.map((item, id) => (
        <li key={id}>
          <div className="comment-main-level">
            <div className="comment-avatar">
              <img
                src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
                alt=""
              />
            </div>
            <div
              onClick={() => {
                console.log(item);
                expandComment(item.kids, oldState);
              }}
              className="comment-box"
            >
              <div className="comment-head">
                <h6 className="comment-name">
                  <a href="http://creaticode.com/blog">{item.by}</a>
                </h6>
                <span>{123}</span>
                <i className="fa fa-reply"></i>
                <i className="fa fa-heart"></i>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: item.text }}
                className="comment-content"
              ></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default connect(
  (state) => ({
    oldState: state
  }),
  (dispatch) => ({
    expandComment: (mapUrl) => {
      dispatch(getComments(mapUrl));
    }
  })
)(DisplayComments);
