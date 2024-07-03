var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")


menubtn.onclick = function () {
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
    }
    else{
        sidenav.style.right = "-250px";
    }
}
