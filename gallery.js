
function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none"; // Remove background image
    imageDiv.innerHTML = "Hover over an image below to display here.";
}








