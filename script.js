document.addEventListener("DOMContentLoaded", function () {

    alert("JS IS RUNNING");

    const btn = document.getElementById("connectBtn");
    const output = document.getElementById("output");

    if (!btn || !output) {
        alert("Missing HTML elements");
        return;
    }

    btn.addEventListener("click", function () {
        output.innerText = "Button clicked successfully!";
    });

});