const btn = document.getElementById("connectBtn");
const status = document.getElementById("status");

btn.addEventListener("click", function () {

    btn.innerText = "Connecting...";
    btn.disabled = true;

    status.innerText = "Connecting to wallet...";

    setTimeout(() => {
        status.innerText = "Wallet Connected ✔";
        btn.innerText = "Connected";
        btn.style.background = "green";
    }, 2000);

});