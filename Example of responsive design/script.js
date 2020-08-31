const changeColorMenu = document.querySelector('#head');
changeColorMenu.style.color = 'red';

menu.onclick = function click() {
    let x = document.getElementById("toptop");

    if (x.className === "myTop") {
        x.className += " responsive";
    } else {
        x.className = "myTop";
    }
}

icon.onclick = function rtt() {
   this.classList.toggle('rotate')

};

