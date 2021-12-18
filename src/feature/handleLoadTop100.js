const listTop = [
  {
    name: "Bậu Ơi Đừng Khóc",
    artist: "Phi Nhung",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/2/5/8/3/2583ac830626d322279cc30bbb387673.jpg",
    category: "tru-tinh",
  },
  {
    name: "Vùng Lá Me Bay",
    artist: "Như Quỳnh",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/d/8/4/d/d84dd1b4eacc2015054e7124bc83340d.jpg",
    category: "tru-tinh",
  },
  {
    name: "Nỗi Nhớ Mưa Phai",
    artist: "Mạnh Quỳnh",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/a/9/6/0/a96097ccfc26b5c3985adb5c8a31be8c.jpg",
    category: "tru-tinh",
  },
  {
    name: "Liên Khúc Trúc Phương: Nửa Đêm Ngoài Phố",
    artist: "Tố My, Phi Nhung",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/e/8/e/0/e8e02bf52737f87d03f6ab0afa218c36.jpg",
    category: "tru-tinh",
  },
  {
    name: "Ốc Đắng Buồn Ai",
    artist: "Tố My, Đan Trường",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/b/0/c/2/b0c25fb75018d3c299a49bf4f9eb3bbc.jpg",
    category: "tru-tinh",
  },
  {
    name: "Đò Sang Ngang",
    artist: "Dư Anh",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/3/f/6/c/3f6ce3dc449e9ca488c9c2135f5ad240.jpg",
    category: "tru-tinh",
  },
  {
    name: "Đêm Buồn Tỉnh Lẻ",
    artist: "Lưu Ánh Loan",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/1/f/3/1/1f310831af9b76ea3bac7c6f093ff6a1.jpg",
    category: "tru-tinh",
  },
  {
    name: "Đom Đóm",
    artist: "Jack",
    cover:
      "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/f/e/9/8/fe9875941d98fbbcb8aedc8960ccbc94.jpg",
    category: "nhac-tre",
  },
];

function loadBolero() {
  const truTinh = document.querySelector("#tru-tinh tbody");
  const bolero = listTop.filter((e) => e.category === "tru-tinh");
  bolero.forEach((e, index) => {
    const trString = `
    <th scope="row">${index + 1}</th>
        <td>
            <img
              class="thumbnail"
              src="${e.cover}"
              alt="${index + 1}"
            />
        </td>
        <td>${e.name}</td>
        <td>${e.artist}</td>
    `;
    const trElem = document.createElement("tr");
    trElem.innerHTML = trString;
    truTinh.insertAdjacentElement("beforeend", trElem);
  });
}
loadBolero();
