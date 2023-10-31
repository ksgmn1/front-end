// 사이드바


// 오픈 버튼 클릭
var menu = document.getElementById("menu");
var close = document.getElementById("close");
var sideBar = document.getElementById("sideBar");
var overlay1 = document.getElementById("overlay1");

menu.addEventListener("click", function(){
    sideBar.classList.remove("hidden");
    overlay1.classList.remove("hidden");
})

// X를 클릭했을 때
close.addEventListener("click", function(){
    sideBar.classList.add("hidden");
    overlay1.classList.add("hidden");
})