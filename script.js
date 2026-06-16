window.onload = function () {
    alert("JS IS RUNNING");

    const btn = document.getElementById("connectBtn");
    const output = document.getElementById("output");

    btn.addEventListener("click", function () {
        output.innerText = "Button clicked successfully!";
    });
};