// #exampleInputEmail1
const $ = document.querySelector.bind(document);

const emailField = $("#exampleInputEmail1");
const psswdField = $("#exampleInputPassword1");
const aBear = $(".bear");
const frmLog = $("#login-form");

function validFrmLog() {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(frmLog.email.value)) {
    alert("Email hoặc tài khoản không hợp lệ");
    return false;
  }
  if (!frmLog.password.value || frmLog.password.value.length < 3) {
    alert("mật khẩu không hợp lệ");
    return false;
  }
  alert("Đăng nhập thành công, quẩy thôi!");
  return true;
}

if (emailField && psswdField && aBear) {
  emailField.onfocus = () => {
    aBear.style.cssText = "left: -545px";
  };
  psswdField.onfocus = () => {
    aBear.style.cssText = "left: -1040px";
  };
  psswdField.onblur = () => {
    aBear.style.cssText = "left: -1290px";
  };
  emailField.onblur = () => {
    aBear.style.cssText = "left: -300px;";
  };
} else {
  console.log("something wrong with email || password || bear element");
}
