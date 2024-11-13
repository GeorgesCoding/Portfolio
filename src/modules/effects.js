//////////////////////////////////////////
///// various effects and animations /////
//////////////////////////////////////////



// Creates a typewriter effect by adding text one character at a time, skips over spaces for a smoother animation
const text = "  Hi, I'm George";
let i = 0;
export function typewriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 150);
    }
}


// Toggles the flip class for the project cards, creating the fliping animation 
export function flip(x) {
    var card = document.getElementById(x.id);
    card.classList.toggle('flip');
}


// Next/previous controls
let slideIndex = 1;
export async function plusSlides(n) {
    slideshow(slideIndex += n);
}

// adds listeners to the prev and next buttons for the slideshow
export function addListeners() {
    let next = document.getElementsByClassName("next"),
        prev = document.getElementsByClassName("prev")

    prev[0].addEventListener("click", function () { plusSlides(-1) });
    next[0].addEventListener("click", function () { plusSlides(1) })
}

export function fadeText() {

}


// creates a slideshow to loop through project pictures
export function slideshow(n) {
    let pictures = document.querySelectorAll(".slides");
    console.log(pictures)
    if (n > pictures.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = pictures.length }
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }
    pictures[slideIndex - 1].style.display = "block";
}