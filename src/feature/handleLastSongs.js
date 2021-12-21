function loadLastSongs() {
  // load lịch sử bài hát từ local
  if (localStorage.getItem("last-song")) {
    const lastSongElement = $("#last-song");
    lastSongElement.style.cssText = "display: block";
    const songList = JSON.parse(localStorage.getItem("last-song"));
    songList.forEach((e) => {
      const str = `
      <div class="center-column music-card-wrapper">
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
        <div class='follow'><i class="fas fa-heart"></i> Yêu thích</div>
        <div class='cancel'><i class="fas fa-times"></i> Huỷ vừa nghe</div>
      </div>
    `;
      const rowListElement = lastSongElement.children[0].children[1];
      const element = document.createElement("div");
      element.setAttribute("class", "center col-sm-6 col-md-4 col-lg-3");
      element.innerHTML = str;
      rowListElement.insertAdjacentElement("afterbegin", element);
      element.children[0].children[0].setAttribute(
        "onclick",
        "return handlePlay(this)"
      );
      element.children[0].children[0].setAttribute("data-id", `${e.id}`);
    });
  }
}
loadLastSongs();
