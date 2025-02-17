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
    let card = document.getElementById(x.id);
    card.classList.toggle('flip');
}


// Next/previous controls
let slideIndex = 1;
async function plusSlides(n, captions) {
    slideshow(slideIndex += n, captions);
}

// adds listeners to the prev and next buttons for the slideshow
export function addListeners(captions) {
    let next = document.getElementById("next"),
        prev = document.getElementById("prev")

    prev.addEventListener("click", function () { plusSlides(-1, captions) });
    next.addEventListener("click", function () { plusSlides(1, captions) })
}


// creates a slideshow to loop through project pictures
export function slideshow(n, captions) {
    let pictures = document.querySelectorAll(".slides"),
        number = document.getElementById("number"),
        caption = document.getElementById("caption"),
        totalPics = Number(pictures[pictures.length - 1].getAttribute("value")) + 1;

    if (n > pictures.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = pictures.length }
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }

    pictures[slideIndex - 1].style.display = "inline-block";
    number.innerHTML = (Number(pictures[slideIndex - 1].getAttribute("value")) + 1) + "/" + totalPics;
    caption.innerHTML = captions[slideIndex - 1]

    return slideIndex - 1;
}

export default function konamiCode() {
    let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
        current = 0;

    let keyHandler = function (event) {

        if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
            current = 0;
            return;
        }

        current++;

        if (pattern.length === current) {
            current = 0;
            Swal.fire({
                heightAuto: false,
                showConfirmButton: false,
                background: "rgb(62, 105, 121)",
                customClass: 'alert',
                html: '<video style="overflow: visible; height: 80vh; width: 65vw;" autoplay unmuted src="./assets/videos/suprise.mp4"></video>',
                timer: 8000
            })
        }
    };

    document.addEventListener('keydown', keyHandler, false);
}