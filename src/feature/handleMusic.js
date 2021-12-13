const songList = [
  {
    id: "001",
    name: "Đi theo bóng mặt trời",
    artist: "Đen Vâu",
    url: "/public/music/ditheobongmattroi.mp3",
    cover: "/public/images/ditheobongmattroi.jpg",
    category: "Nhac tre",
    type: "V-pop",
  },
  {
    id: "002",
    name: "Lộn xộn 2",
    artist: "Đen Vâu",
    url: "/public/music/lonxon.mp3",
    cover: "/public/images/lonxon.jpg",
    category: "Nhac tre",
    type: "V-pop",
  },
  {
    id: "003",
    name: "Đi về nhà",
    artist: "Đen Vâu",
    url: "/public/music/divenha.mp3",
    cover: "/public/images/divenha.jpg",
    category: "Nhac tre",
    type: "V-pop",
  },
  {
    id: "004",
    name: "Lâu đài tình ái cover",
    artist: "Trần Thiện Thanh",
    url: "/public/music/laudaitinhai.mp3",
    cover: "/public/images/laudaitinhai.png",
    category: "Nhac tre",
    type: "V-pop",
  },
  {
    id: "005",
    name: "Tiếng trống Branung",
    artist: "Phạm Thu Hà & Drum Hùng Cường",
    url: "/public/music/tiengtrongbranung.mp3",
    cover: "/public/images/tiengtrongbranung.jpg",
    category: "Nhac tre",
    type: "V-pop",
  },
  {
    id: "006",
    name: "Khuê mộc lan (Kuimu Wolf)",
    artist: "Huong Ly & Jombie",
    url: "/public/music/khuemoclan.mp3",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/d/2/6/1/d26117831a67fecf48f95c99823cecc6.jpg",
    category: "Nhac tre",
    type: "V-pop",
  },
];

const $ = document.querySelector.bind(document);
function handlePlay(e) {
  const id = e.children[0].children[0].dataset.id;
  const song = songList.filter((e) => e.id === id)[0];
  console.log(song);
  const playeZone = $("#player-zone");
  playeZone.style.cssText = "display: block";
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    autoplay: true,
    audio: [
      {
        name: song.name,
        artist: song.artist,
        url: song.url,
        cover: song.cover,
      },
    ],
  });
}
