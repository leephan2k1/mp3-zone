function loadLastSongs() {
  // load lịch sử bài hát từ local
  if (localStorage.getItem("last-song")) {
    const lastSongElement = $("#last-song");
    lastSongElement.style.cssText = "display: block";
    const songList = JSON.parse(localStorage.getItem("last-song"));
    // const loveList = JSON.parse(localStorage.getItem("love-list"));

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

      //Xử lý sự kiện yêu thích
      const followBtn = document.querySelector("#last-song .follow");
      //Load lai active css
      // if (loveList) {
      //   loveList.forEach((e) => {
      //     if (e === element.children[0].children[0].dataset.id) {
      //       const parent = element.children[0].children[0].parentNode;
      //       const followBtn = parent.children[2];
      //       followBtn.classList.add("follow-active");
      //     }
      //   });
      // }
      followBtn.onclick = () => {
        const loveList = JSON.parse(localStorage.getItem("love-list"));
        // console.log(loveList);
        // if (loveList) {
        //   if (loveList.some((elem) => elem === e.id)) {
        //     followBtn.classList.remove("follow-active");
        //   } else {
        //     followBtn.classList.add("follow-active");
        //     // console.log("on");
        //   }
        // }
        toggleLoveSong(e.id);
      };
      //Xử lý sự kiện xoá khỏi yêu thích
      const cancelBtn = document.querySelector("#last-song .cancel");

      cancelBtn.onclick = () => {
        const removeElement = cancelBtn.closest(
          ".center.col-sm-6.col-md-4.col-lg-3"
        );
        console.log(removeElement);
        removeElement.remove();

        //Xoa khoi danh sach vua nghe duoi local
        let songList = JSON.parse(localStorage.getItem("last-song"));
        songList = songList.filter((elem) => elem.id !== e.id);
        if (songList.length) {
          localStorage.setItem("last-song", JSON.stringify(songList));
        } else {
          localStorage.removeItem("last-song");
        }
      };
    });
  }
}
loadLastSongs();
