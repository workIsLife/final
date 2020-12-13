import React from "react";
import {
  UPDATE_CONTENT,
  DETAILS_CONTENT,
  UPDATE_COMMENTS,
  DETAIL_COMMENT
} from "../action/globalVaribl";

const initialStore = {
  load: false,
  firstCall: true
};

export default function reducer(state = initialStore, action) {
  if (action.type === UPDATE_CONTENT) return action.payload;
  else if (action.type === DETAILS_CONTENT) {
    console.log("Detail_contact", action.payload);
    return action.payload;
  } else if (action.type === UPDATE_COMMENTS)
    return { ...action.payload, isFirstCall: action.isFirstCall };
  else if (action.type === DETAIL_COMMENT) return action.payload;
  else if (action.type === "FIRST_CALL") {
    console.log(action.isFirstCall);
    return { ...action.payload, isFirstCall: action.isFirstCall };
  }
  return [state];
}
