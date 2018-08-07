var images = document.querySelectorAll("img");

for (var i = 0; i < images.length; i++) {

    var imageElement = document.getElementById("image--element"),
        imageText = document.getElementById("image--text");

    if (images[i].hasAttribute("alt") === true) {

        imageText.style.display = "none";
        imageText.classList.add("bg--hide");

    } else {

        imageText.style.display = "block";
        imageText.classList.add("bg--show");

    }

    images[i].onclick = function () {

        imageElement.src = this.src;
        imageText.innerHTML = this.alt;
        expandImg.parentElement.style.display = "block";

    }
}

document.getElementById("close").addEventListener("click", function () {

    document.getElementById("image-container").style.display = "none";

});

var dw = document || window;

dw.onclick = function (event) {

    var image = document.getElementById("image-container");

    if (event.target == image) {

        image.style.display = "none";

    }

}