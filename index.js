function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = src.split('/').pop();

    span.onclick = function() {
        modal.style.display = "none";
    }
}
document.querySelector(".kontacts").addEventListener("click", function() {
    document.getElementById("contactModal").style.display = "block";
});

var contactModal = document.getElementById("contactModal");
var contactSpan = contactModal.getElementsByClassName("close")[0];

contactSpan.onclick = function() {
    contactModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

