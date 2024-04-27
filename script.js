document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    button1.addEventListener("click", function() {
        window.location.href = "index.html";
    });
    button2.addEventListener("click", function() {
        window.location.href = "unsupported.html";
    });
    button3.addEventListener("click", function() {
        window.location.href = "OSscreenshots.html";
    });
    button4.addEventListener("click", function() {
        window.location.href = "Toolkit.html";
    });
    button5.addEventListener("click", function() {
        window.open("https://discord.gg/4aNYHSEHYw", "_blank");
    });
    button6.addEventListener("click", function() {
            window.open("https://github.com/HickerDicker", "_blank");
    });
});