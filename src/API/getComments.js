import getData from "./getData";

export default async function getComments(mapUrl) {
  const childComments = [];
  if (!mapUrl) return 0;
  for (let i = 0; i < mapUrl.length; i++) {
    const data = await getData(mapUrl[i]);
    childComments.push(data);
  }
}
