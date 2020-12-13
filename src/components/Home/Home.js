import React from "react";
import Card from "../displayCard";
import { connect } from "react-redux";
import { getItem } from "../../action/getItem";
import { getNews } from "../../action/getNews"
import Loader from "../Loader/Loader";
import {FIRST_CALL} from '../../action/globalVaribl'
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
  if (!props.isFirstCall) {
    props.firstCall(id);
    if(id) id.click(); 
  } 
  // if (props.isFirstCall && !props.isUpdate) {
  //   console.log("i'm here is Updata", props)
  //   setTimeout(function recGetDataAPI() {
  //     props.toUpdataValue();
  //     console.log('state',props.state);
  //     //props.toUpdate();
  //     setTimeout(recGetDataAPI, 20000);
  //   }, 2000);
  // }
  if (isLoad) {
    return <DisplayHome {...props} />;
  }
  return <Loader />;
}

export default connect(
  (state) => ({
    stateCard: state.afterSort,
    isLoad: state.isLoad,
    isFirstCall: state.isFirstCall,
    isUpdate: state.isUpdate,
    state
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
      dispatch({ type: FIRST_CALL, isFirstCall: isLoad });
    },
    toUpdataValue: () => {
      dispatch({type: "IS_UPDATE", payload: true});
    },
    toUpdate: (oldData) => {
      dispatch(getNews(oldData));
    },
  })
)(Home);
