window.Telegram.WebApp.ready();

document.getElementById("betButton").addEventListener("click", function () {
    Telegram.WebApp.sendData("User wants to place a bet!");
});