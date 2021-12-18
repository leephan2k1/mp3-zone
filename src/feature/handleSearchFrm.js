function searchFrm(frm) {
  if (!frm["search-box"].value || !frm["search-box"].value.length) {
    alert("Từ khoá không hợp lệ");
  } else {
    window.open(
      `https://zingmp3.vn/tim-kiem/tat-ca?q=${frm["search-box"].value.replace(
        /\s/g,
        "%20"
      )}`
    );
  }
}
