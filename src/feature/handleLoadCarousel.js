import songList from "../fakeSongsJSON.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function loadThumbnail() {
  const imgList = $$(".carousel-item .img-fluid");
  let index = 0;
  // console.log(songList);
  if (songList) {
    imgList.forEach((element) => {
      element.setAttribute("src", songList[index].cover);
      element.setAttribute("data-id", songList[index++].id);
    });
  }
}
loadThumbnail();
