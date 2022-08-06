// const onScroll = document.getElementById('onload-scroll-destination');

window.onload = (e) => {
  // {behavior: "smooth"}
  let onScroll = document.getElementById('onload-scroll-destination');
  console.log(onScroll);
  onScroll.scrollIntoView({ behavior: 'smooth', block: 'end' });
};
