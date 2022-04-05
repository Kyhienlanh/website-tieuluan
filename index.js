// var name = window.prompt("chào bạn!bạn tên gì"," ");
// document.write("tui tên" + name +"haha");
// function hoidap()
// {
//     question= confirm("bạn thật sự muốn vào web?")
//     if(question!="0"){
//         top.location="https://www.instagram.com/"
//     }
// }

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("navbar").style.top = "0";
   } else {
     document.getElementById("navbar").style.top = "-50px";
  }
}


function KiemTraThongTin (){
  var hoTen = document.getElementById("ho");
  if(hoTen.value==""){
      alert("Vui lòng nhập Họ tên.");
      hoten.focus();
      return true;
  }
  var nam=document.getElementById("ten");
  if(nam.value==""){
      alert("Hãy điền tên.");
      nam.focus();
      return fasle;
  }
  var a=document.getElementById("email");
  if(a.value==""){
      alert("Hãy điền email.");
      a.focus();
      return fasle;
  }
  var b=document.getElementById("matkhau");
  if(b.value==""){
      alert("Hãy điền mật khẩu.");
      b.focus();
      return fasle;
  }
  alert("Đăng ký thành công! Xin chúc mừng.");
  return true;
}

function KiemTraThongTin (){
          
  var a=document.getElementById("email");
  if(a.value==""){
      alert("Hãy điền tên đăng nhập.");
      a.focus();
      return fasle;
  }
  var b=document.getElementById("matkhau");
  if(b.value==""){
      alert("Hãy điền mật khẩu.");
      b.focus();
      return fasle;
  }
  alert("Đăng nhập thành công.");
  return true;
}