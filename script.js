document.addEventListener("DOMContentLoaded", function() {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    let button4 = document.getElementById("button4");
    let button5 = document.getElementById("button5");
    button1.addEventListener("click", function() {
        window.location.href = "index.html";
    });
    button2.addEventListener("click", function() {
        window.location.href = "unsupported.html";
    });
    document.addEventListener("DOMContentLoaded", function() {
        var p2Elements = document.querySelectorAll("p2");
        p2Elements.forEach(function(element) {
            element.innerHTML += "<br>";
        });
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