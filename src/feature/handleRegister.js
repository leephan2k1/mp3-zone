const $ = document.querySelector.bind(document);

function validFrmReg(frm) {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!frm.fullName.value || !frm.fullName.value.length) {
    alert("Họ tên không hợp lệ");
    return false;
  }
  if (!regEmail.test(frm.email.value)) {
    alert("Email không hợp lệ!");
    return false;
  }
  if (!frm.password.value || frm.password.value.length < 6) {
    alert("Mật khẩu tối thiểu 6 ký tự");
    return false;
  }
  const date = new Date(frm.birthday.valueAsDate);
  date.setDate(date.getDate() + 1);
  if (new Date().getFullYear() - date.getFullYear() < 6) {
    alert("Người dùng cần đủ 6 tuổi trở lên!");
    return false;
  }
  if (
    !frm.inlineRadioOptions[0].checked &&
    !frm.inlineRadioOptions[1].checked &&
    !frm.inlineRadioOptions[2].checked
  ) {
    alert("Chưa xác định giới tính!");
    return false;
  }
  if (!frm.accept.checked) {
    alert("Vui lòng đồng ý với điều khoản");
    return false;
  }
  alert("Đăng ký thành công!");
  return true;
  //   alert(typeof frm.birthday);
}
const nameField = $("#exampleInputName");
const emailField = $("#exampleInputEmail1");
const psswdField = $("#exampleInputPassword1");
const birthdayField = $("#inputNs");
const inputBtn = $("#exampleCheck1");
const aBear = $(".bear");
if (
  nameField &&
  emailField &&
  psswdField &&
  birthdayField &&
  inputBtn &&
  aBear
) {
  emailField.onfocus = () => {
    aBear.style.cssText = "left: -545px";
  };
  psswdField.onfocus = () => {
    aBear.style.cssText = "left: -1040px";
  };
  birthdayField.onfocus = () => {
    aBear.style.cssText = "left: -545px";
  };
  nameField.onfocus = () => {
    aBear.style.cssText = "left: -545px";
  };

  psswdField.onblur = () => {
    aBear.style.cssText = "left: -1290px";
  };
  emailField.onblur = () => {
    aBear.style.cssText = "left: -300px;";
  };

  inputBtn.onfocus = () => {
    aBear.style.cssText = "left: -793px;";
  };
} else {
  console.log("something wrong with elements");
}
