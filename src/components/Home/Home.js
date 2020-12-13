import React from "react";
import Card from "../displayCard";
import { connect } from "react-redux";
import { getItem } from "../../action/getItem";

import Loader from "../Loader/Loader";

function DisplayHome(props) {
  return (
    <>
      {props.stateCard.map((el, id) => (
        <Card key={id} detailNews={props.saveId} content={el} />
      ))}
    </>
  );
}

function Home(props) {
  const isLoad = props.isLoad;
  const id = document.getElementById("btn");
  console.log(document, props);
  // if (!props.isFirstCall) {
  //   console.log("here");
  //   props.firstCall(id);
  //   //if(id) id.click(); 
  // }
  if (isLoad) {
    return <DisplayHome {...props} />;
  }
  return <Loader />;
}

export default connect(
  (state) => ({
    stateCard: state.afterSort,
    isLoad: state.load,
    isFirstCall: state.isFirstCall
  }),
  (dispatch) => ({
    saveId: (id) => {
      dispatch(
        getItem(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      );
    },
    firstCall: (id) => {
      let isLoad = false;
      if (id)
        isLoad = true
      dispatch({ type: "FIRST_CALL", isFirstCall: isLoad });
    },
    updateData: () => {
      dispatch();
    }
  })
)(Home);
