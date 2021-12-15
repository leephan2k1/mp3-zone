function loadLastSongs() {
  // load lịch sử bài hát từ local
  if (localStorage.getItem("last-song")) {
    const lastSongElement = $("#last-song");
    lastSongElement.style.cssText = "display: block";
    const songList = JSON.parse(localStorage.getItem("last-song"));
    songList.forEach((e) => {
      const str = `
      <div class="music-card-wrapper">
        <div class="music-card__img">
          <div class="overlay">
            <i class="fas fa-play"></i>
          </div>
          <img
            src="${e.cover}"
            alt="${e.name}"
          />
        </div>
        <h3 class="music-card__desc list-title">
          ${e.name}
        </h3>
      </div>
    `;
      const rowListElement = lastSongElement.children[0].children[1];
      const element = document.createElement("div");
      element.setAttribute("class", "center col-sm-6 col-md-4 col-lg-3");
      element.setAttribute("data-id", `${e.id}`);
      element.setAttribute("onclick", "return handlePlay(this)");
      element.innerHTML = str;
      rowListElement.insertAdjacentElement("afterbegin", element);
    });
  }
}
loadLastSongs();
