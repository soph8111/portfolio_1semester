window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    // Om mig siden: tryk på "send" i kontaktformularen
    document.querySelector(".send").addEventListener("click", visPopop);

}

function visPopop() {
    console.log("visPopop");

    // Ryd op
    document.querySelector(".send").removeEventListener("click", visPopop);

    // Vis pop op
    document.querySelector("#tak").classList.remove("hidden");

    // Gør det muligt at lukke pop op
    document.querySelector(".luk").addEventListener("click", lukPopop);
}

function lukPopop() {
    console.log("lukPopop");

    // Ryd op:
    document.querySelector(".luk").removeEventListener("click", lukPopop);

    // Skjul pop op
    document.querySelector("#tak").classList.add("hidden");
}
