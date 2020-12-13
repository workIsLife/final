import getNewsAPI from "../API/getNews";
import { UPDATE_CONTENT } from "./globalVaribl";

export const getNews = (oldData) => {
  return (dispatch) => {
    console.log(2);
    getNewsAPI(oldData).then((data) => {
      const beforeSort = [...data];
      console.log("beforeSort", beforeSort);
      const afterSort = data.sort((a, b) => b.time - a.time);
      const isLoad = true;
      dispatch({
        type: UPDATE_CONTENT,
        payload: { afterSort, beforeSort, load: true }
      });
    });
  };
};
