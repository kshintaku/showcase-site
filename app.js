/* Set the width of the side navigation to 250px */
function openNav() {
    // document.getElementsByClassName("side-nav").style.width = "90%";
    document.getElementById("side-nav").style.width = "72%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    // document.getElementsByClassName("side-nav").style.width = "90%";
    document.getElementById("side-nav").style.width = "0";
}

function toggleNav() {
    if(document.getElementById("nav-icon").className === "") {
        document.getElementById("nav-icon").className = "open"
        document.getElementById("side-nav").style.width = "72%";
    }
    else {
        document.getElementById("nav-icon").className = ""
        document.getElementById("side-nav").style.width = "0";
    }
}