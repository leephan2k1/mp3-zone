function toggleLoveSong(songID) {
  if (localStorage.getItem("love-list")) {
    let loveList = JSON.parse(localStorage.getItem("love-list"));
    if (loveList.some((e) => e === songID)) {
      loveList = loveList.filter((e) => e !== songID);
    } else {
      loveList.push(songID);
    }
    localStorage.setItem("love-list", JSON.stringify(loveList));
  } else {
    localStorage.setItem("love-list", JSON.stringify([songID]));
  }
}
