export default async function getData(url) {
  console.log(url);
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();
  return await data;
}
