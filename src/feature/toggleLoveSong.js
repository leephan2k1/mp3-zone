function toggleLoveSong(songID) {
  if (localStorage.getItem("love-list")) {
    let loveList = JSON.parse(localStorage.getItem("love-list"));
    if (loveList.some((e) => e === songID)) {
      loveList = loveList.filter((e) => e !== songID);
      alert("Đã xoá bỏ bài hát khỏi yêu thích");
    } else {
      loveList.push(songID);
      alert("Đã thêm bài hát vào yêu thích");
    }
    if (loveList.length)
      localStorage.setItem("love-list", JSON.stringify(loveList));
    else localStorage.removeItem("love-list");
  } else {
    alert("Đã thêm bài hát vào yêu thích");
    localStorage.setItem("love-list", JSON.stringify([songID]));
  }
}
