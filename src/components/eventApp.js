export function mouseLeaveCard(e) {
  const event = e.classList.contains("card") ? e : e.parentElement;
  setTimeout(() => (event.style.zIndex = 0), 1500);
  console.log(event);
}

export function mouseEnterCard(e) {
  const event = e.classList.contains("card") ? e : e.parentElement;
  event.style.zIndex = 999;
  console.log(event);
}
