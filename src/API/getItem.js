import getData from "./getData";
// Рекурсивный обход 
// async function getComments(mapUrl) {
//   const comments = {};
//   // Проверка
//   if (!mapUrl || !mapUrl.length) return 0;
//   for (let i = 0; i < mapUrl.length; i++) {
//     //console.log(`i = ${i}`);
//     let commentStr = "";
//     let urlIdComment = `https://hacker-news.firebaseio.com/v0/item/${mapUrl[i]}.json?print=pretty`;
//     let data = await getData(urlIdComment);
//     console.log(data);
//     commentStr = data.text;
//     comments[i] = {};
//     comments[i].id = mapUrl[i];
//     if (Array.isArray(data.kids))
//       comments[i].kids = await getComments(data.kids);
//     comments[i].text = commentStr;
//   }
//   return comments;
// }

async function getComments(kids) {
  let comments = [];
  if (!kids) return 0;
  for (let i = 0; i < kids.length; i++) {
    const urlCommit = `https://hacker-news.firebaseio.com/v0/item/${kids[i]}.json?print=pretty`;
    const comment = await getData(urlCommit);
    comments.push(comment);
  }
  return comments;
}

export default async function getItem(url) {
  const itemData = await getData(url);
  // Проверка
  const dataComments = await getComments(itemData.kids);
  // let comments = {};
  return { itemData, dataComments };
}
