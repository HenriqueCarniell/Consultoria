var timer = null;

window.addEventListener('scroll', function() {
    clearTimeout(timer);
    var traçoBranco = document.getElementById("traço-branco");
    traçoBranco.style.width = "220px";
    timer = setTimeout(function() {
        traçoBranco.style.width = "60px";
    }, 150);
});