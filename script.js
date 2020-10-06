function addResponsiveClassToMyMenu() {
    var x = document.getElementById("mojeMenu1");
    if (x.className === "menu1") {
        x.className += " responsive";
    } else {
        x.className = "menu1";
    }
}


var menu = document.getElementById("mojeMenu1");

var sticky = menu.offsetTop;
window.onscroll = function() {shouldMenuBeSticky()};


function shouldMenuBeSticky() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky")
    } else {
        menu.classList.remove("sticky");
    }
}