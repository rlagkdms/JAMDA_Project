let hiddenbtn = document.getElementsByClassName("eye")[0];
let pwDiv = document.getElementById("pw");

function hiddenPw(){
    if(pwDiv.type === "password"){
        pwDiv.type = "text";
        hiddenbtn.src = "/image/eye-close.svg";
    }
    else{
        pwDiv.type = "password";
        hiddenbtn.src = "/image/iconoir_eye-alt.svg";
    }
}
function submitLogin() {
  var id = document.getElementById("id").value;
  var pw = document.getElementById("pw").value;

  axios
    .post("http://43.201.10.121:3000/users/login", {
      userid: id,
      pw: pw,
    })
    .then((response) => {
      const token = response.data.token;
      // 토큰을 로컬 스토리지 또는 쿠키 등에 저장
      localStorage.setItem("token", token)
      console.log("Login successful!");
      alert("로그인 되었습니다.");
//      window.location.href = "/startProfileSetting.html";
      // 로그인 성공 시 다음 페이지로 이동
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        alert("로그인 에러가 발생했습니다.");
        console.error("Error during login:", error);
      }
    });
}
