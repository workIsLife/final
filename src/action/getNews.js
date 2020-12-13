import getNewsAPI from "../API/getNews";
import { UPDATE_CONTENT } from "./globalVaribl";

export const getNews = (oldData) => {
  return (dispatch) => {
    console.log('action getNews oldData', oldData);
    getNewsAPI(oldData).then((data) => {
      const beforeSort = [...data];
      console.log("beforeSort", beforeSort);
      const afterSort = data.sort((a, b) => b.time - a.time);
      dispatch({
        type: UPDATE_CONTENT,
        payload: { afterSort, beforeSort, isLoad: true, isFirstCall: true }
      });
    });
  };
};
