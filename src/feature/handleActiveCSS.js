// let index;
const menu = document.querySelectorAll(".menu-feature");

switch (window.location.pathname) {
  case "/src/pages/theodoi.html":
    menu[1].classList.add("active");
    break;
  case "/src/pages/top100.html":
    menu[3].classList.add("active");
    break;
  case "/src/pages/yeuthich.html":
    menu[0].classList.add("active");
    break;
  case "/src/pages/danhsachphat.html":
    menu[2].classList.add("active");
    break;
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
