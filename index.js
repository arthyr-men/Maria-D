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
