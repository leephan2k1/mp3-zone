const followers = document.querySelectorAll(".follow");
const listActive = new Array(followers.length).fill(false);
function toggleFollow(e) {
  e.classList.toggle("follow-active");
  followers.forEach((e, index) => {
    if (e.getAttribute("class") === "follow follow-active") {
      listActive[index] = true;
    } else {
      listActive[index] = false;
    }
  });
  //Lưu xuống local
  localStorage.setItem("list-follow", JSON.stringify(listActive));
}

//Load active
if (localStorage.getItem("list-follow")) {
  const listLoad = JSON.parse(localStorage.getItem("list-follow"));
  listLoad.forEach((e, index) => {
    if (e === true) {
      followers[index].classList.toggle("follow-active");
    }
  });
}
