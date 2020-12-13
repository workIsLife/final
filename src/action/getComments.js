import getCommentsAPI from "../API/getComments";
import { DETAIL_COMMENT } from "./globalVaribl";

export const getComments = (mapUrl, oldState) => {
  return (dispatch) => {
    console.log(mapUrl);
    getCommentsAPI(mapUrl).then((data) => {
      console.log("data       ");
      console.log(data);
      console.log(oldState);
      dispatch({ type: DETAIL_COMMENT, payload: { ...oldState, data } });
    });
  };
};
