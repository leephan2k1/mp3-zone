import songList from "../fakeSongsJSON.js";
const playeZone = document.querySelector("#player-list");
if (localStorage.getItem("list-type")) {
  const playList = songList.filter(
    (e) => e.type === localStorage.getItem("list-type")
  );
  const readyPlay = playList.map((song) => ({
    name: song.name,
    artist: song.artist,
    url: song.url,
    cover: song.cover,
    lrc: "lrc1.lrc",
  }));
  console.log(readyPlay);
  playeZone.style.cssText = "display: block";
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    listMaxHeight: 100,
    order: "random",
    preload: "auto",
    loop: "all",
    audio: readyPlay,
  });
}
