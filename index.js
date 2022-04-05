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