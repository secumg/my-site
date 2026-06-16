document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("connectBtn");
    const output = document.getElementById("output");

    if (!btn || !output) {
        alert("Elements not found");
        return;
    }

    btn.onclick = function () {
        output.innerText = "Wallet Connected (Demo Mode)";
        output.style.color = "green";
    };

});