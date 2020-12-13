import React from "react";
import {
  UPDATE_CONTENT,
  DETAIL_CONTENT,
  UPDATE_COMMENT,
  DETAIL_COMMENT,
  FIRST_CALL
} from "../action/globalVaribl";

const initialStore = {
  load: false,
  firstCall: true
};

export default function reducer(state = initialStore, action) {
  if (action.type === UPDATE_CONTENT)
    return action.payload;
  //else if (action.type === 'IS_UPDATE') 
    //console.log('action IS_UPDATE', {...state, isUpdate: action.payload});
  //  return {...state, isUpdate: action.payload}
  else if (action.type === DETAIL_CONTENT)
    return action.payload;
  else if (action.type === UPDATE_COMMENT)
    return { ...action.payload, isFirstCall: action.isFirstCall };
  else if (action.type === DETAIL_COMMENT) return action.payload;
  else if (action.type === FIRST_CALL)
    return { ...action.payload, isFirstCall: action.isFirstCall };
  return state;
}
