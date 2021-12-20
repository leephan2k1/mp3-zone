function validContactFrm(frm) {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(frm.email.value)) {
    alert("Email không hợp lệ!");
    return false;
  }
  if (frm.content.value === "" || !frm.content.value.length) {
    alert("Có gì đâu mà gửi hả bạn?");
    return false;
  }
  alert("Gửi nội dung thành công!");
  return true;
}
