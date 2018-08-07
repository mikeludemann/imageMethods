var index = 1;
var elements = ".slider--element";

showSlides(index, elements);

document.getElementById("prev").addEventListener("click", function () {

    prev();

});

document.getElementById("next").addEventListener("click", function () {

    next();

});

function prev() {

    showSlides(index -= 1, elements);

}

function next() {

    showSlides(index += 1, elements);

}

function showSlides(index, elements) {

    var i,
        slides = document.querySelectorAll(elements);

    if (index > slides.length) {

        index = 1;

    }

    if (index < 1) {

        index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    slides[index - 1].style.display = "block";

}

/**
 * Dots - Recursion of slider elements
 * 
 * TBD - Follow
 */