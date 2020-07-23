function showImage(e) {
    var modalImage = document.getElementById("modalImage");
    modalImage.src = e.src;
}

//2.Create paragraphand 2 buttonsof zoom in zoom out 
function zoomin() {
    var computeFontSize = window.getComputedStyle(document.getElementById("myp")).fontSize;
    var x = parseInt(computeFontSize);
    document.getElementById("myp").style.fontSize = (x + 10 + 'px');
}

function zoomout() {
    var computeFontSize = window.getComputedStyle(document.getElementById("myp")).fontSize;
    var x = parseInt(computeFontSize);
    document.getElementById("myp").style.fontSize = (x - 10 + 'px');
}
