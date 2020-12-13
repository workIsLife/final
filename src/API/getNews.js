import getData from "./getData";
import { URL } from "./globalVaribl";

function checkData(oldData, newData) {
  // console.log("oldData");
  // console.log(oldData);
  // console.log('newData');
  // console.log(newData);
  if (!oldData || !oldData.length) return 0;
  for (let i = 0; i < 100; i++) {
    console.log(newData[i], oldData[i].id, newData[i] === oldData[i].id)
    console.log(i);
    if (+oldData[i].id !== +newData[i]) return 0;
  }
  return 1;
}

export default async function getNews(oldData, url = URL) {
  const idNews = await getData(url);
  const dataNews = [];
  if (checkData(oldData, idNews)) return oldData;
  for (let i = 0; i < 100; i++) {
    const urlNewsId = `https://hacker-news.firebaseio.com/v0/item/${idNews[i]}.json?print=pretty`;
    const itemNews = await getData(urlNewsId);
    dataNews.push(itemNews);
  }
  return dataNews;
}
