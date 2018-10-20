var images = document.getElementsByClassName("images"),
    previous = document.getElementById("prev"),
    next = document.getElementById("next"),
    close = document.getElementById("close"),
    mainImages = document.getElementsByClassName("shadow");

previous.addEventListener("click", function () {

    getSliderPosition(-1);

});

next.addEventListener("click", function () {

    getSliderPosition(1);

});

close.addEventListener("click", function () {

    closeModal();

});

for (var i = 0; i < images.length; i++) {

    images[i].onclick = showImage(i);

}

function showImage(i) {

    return function () {

        getCurrentSliderPosition(i + 1);

    };

}

for (var i = 0; i < mainImages.length; i++) {

    mainImages[i].onclick = showModalImage(i);

}

function showModalImage(i) {

    return function () {

        getCurrentSliderPosition(i + 1);
        openModal();

    };

}

function openModal() {

    document.getElementById('myModal').style.display = "block";

}

function closeModal() {

    document.getElementById('myModal').style.display = "none";

}

var sliderIndex = 1;

mainSlider(sliderIndex);

function getSliderPosition(n) {

    mainSlider(sliderIndex += n);

}

function getCurrentSliderPosition(n) {

    mainSlider(sliderIndex = n);

}

function mainSlider(n) {

    var i,
        slides = document.getElementsByClassName("slideElement"),
        dots = document.getElementsByClassName("images"),
        captionText = document.getElementById("caption");

    if (n > slides.length) {

        sliderIndex = 1

    }

    if (n < 1) {

        sliderIndex = slides.length

    }

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].className += " active";
    captionText.innerHTML = dots[sliderIndex - 1].alt;

}