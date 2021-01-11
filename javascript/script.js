window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    // Tryk på burgermenu
    document.querySelector("#burgermenu").addEventListener("click", toggelmenu);

}

function toggelmenu() {
    console.log("toggelmenu");
    document.querySelector("#menu").classList.toggle("hidden");
    // Animation ved åben af menu
    document.querySelector("#menu").classList.toggle("dropDown_open");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#burgermenu").textContent = "☰";
    } else {
        document.querySelector("#burgermenu").textContent = "╳";
    }
}
