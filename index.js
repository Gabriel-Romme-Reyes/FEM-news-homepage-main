let sidepanel = document.getElementById("sidepanel");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");
let closebtn = document.getElementById("sidepanel-close");

menu.onclick = function () {
        overlay.style.display = "block";
        sidepanel.style.width= "70%";
        console.log(sidepanel.style.width);
}

closebtn.onclick = function () {
    sidepanel.style.width = "0";
    overlay.style.display = "none";
}

function windowresizer (){

    console.log(window.innerWidth)
    if(window.innerWidth > 1280){
        overlay.style.display = "none";
        sidepanel.style.width = "auto"
    }
    else{
        sidepanel.style.width = 0;
        overlay.style.display = "none";
    }
}

window.addEventListener('resize', windowresizer);
