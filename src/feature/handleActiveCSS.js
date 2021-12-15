let index;
const menu = document.querySelectorAll(".menu-feature");
//load lại active từ trang khác
if (localStorage.getItem("active-menu")) {
  let arrayActive = JSON.parse(localStorage.getItem("active-menu"));
  index = arrayActive.indexOf(1);
  menu[index].classList.add("active");
} else {
  const newArr = new Array(11).fill(0);
  //   newArr[e.dataset.id] = 1;
  localStorage.setItem("active-menu", JSON.stringify(newArr));
}
//reset active trang chủ
if (window.location.pathname === "/src/pages/trangchu.html") {
  menu.forEach((e) => {
    e.classList.remove("active");
  });
}
function handleClick(e) {
  menu.forEach((e) => {
    e.classList.remove("active");
  });
  if (localStorage.getItem("active-menu")) {
    let arrayActive = JSON.parse(localStorage.getItem("active-menu"));
    arrayActive = arrayActive.fill(0);
    arrayActive[e.dataset.id] = 1;
    localStorage.setItem("active-menu", JSON.stringify(arrayActive));
  }
  e.classList.add("active");
}

// responsive mobile
const user = document.querySelector(".user");
let sidebarToggle = false;
const sidebar = document.querySelector(".side-bar");
if (window.innerWidth < 740) {
  // console.log(window.innerWidth < 740);
  if (user) {
    user.onclick = () => {
      // console.log(window.innerWidth);
      if (sidebar && !sidebarToggle) {
        sidebar.style.cssText = "transform: translateX(0)";
        sidebarToggle = !sidebarToggle;
      } else if (sidebarToggle) {
        sidebar.style.cssText = "transform: translateX(-300px)";
        sidebarToggle = !sidebarToggle;
      }
    };
  }
}
