// Galeria de imagenes
var MainImg = document.getElementById("MainImg"),
smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () { MainImg.src = smallimg[0].src;};
smallimg[1].onclick = function () { MainImg.src = smallimg[1].src; };
smallimg[2].onclick = function () { MainImg.src = smallimg[2].src; };
smallimg[3].onclick = function () { MainImg.src = smallimg[3].src;};

// Call Tabs
let tabHeader =document.getElementsByClassName("tab-header")[0],
tabIndicador=document.getElementsByClassName("tab-indicador")[0],
tabBody =document.getElementsByClassName("tab-body")[0];

let tabsPane =tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click",function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicador.style.left = `calc(calc(100% / 3) * ${i})`;
    });
    
}


