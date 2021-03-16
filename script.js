
document.getElementById("byid").innerHTML = "我來自id";
document.getElementById("byid").style.color = "blue";

document.getElementsByClassName("byclass")[0].innerHTML="我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";

document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily = "微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML = "我是一條酸菜魚";
document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.fontsize = "30px";
