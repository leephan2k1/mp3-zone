import songList from "../fakeSongsJSON.js";
//load bài hát yêu thích
const titleElem = document.querySelector(".playlist-title");
const contentElem = document.querySelector(".playlist-content");
if (localStorage.getItem("love-list")) {
  titleElem.innerHTML = "Bài hát yêu thích";
  const loveList = JSON.parse(localStorage.getItem("love-list"));
  songList.forEach((songList) => {
    if (loveList.find((e) => e === songList.id)) {
      const str = ` <div class="playlist-item">
                       <span class="song-name">${songList.name}</span>
                       <span class="song-artist">${songList.artist}</span>
                    </div>`;
      contentElem.innerHTML += str;
    }
  });
  console.log(loveList);
} else {
  titleElem.innerHTML =
    'Bạn chưa yêu thích bài hát nào, hãy nghe vài bài và nhấn "yêu thích"';
}
