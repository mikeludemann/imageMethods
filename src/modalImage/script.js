var modal = document.getElementById('modalImage'),
    image = document.querySelectorAll("img"),
    modalImage = document.getElementById("image"),
    text = document.getElementById("caption");

for (var i = 0; i < image.length; i++) {

    image[i].onclick = function () {

        modal.style.display = "block";
        modalImage.src = this.src;
        text.innerHTML = this.alt;

    }

}

document.getElementById("close").onclick = function () {

    modal.style.display = "none";

}

var dw = document || window;

dw.onclick = function (event) {

    var modal = document.getElementById("modalImage");

    if (event.target == modal) {

        modal.style.display = "none";

    }

}