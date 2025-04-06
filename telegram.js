window.Telegram.WebApp.ready();

document.getElementById("betButton").addEventListener("click", function () {
    Telegram.WebApp.sendData("User wants to place a bet!");
});

window.Telegram.WebApp.ready();

document.getElementById("teamA").addEventListener("click", function () {
    Telegram.WebApp.sendData("User selected Team A for the bet!");
});

document.getElementById("teamB").addEventListener("click", function () {
    Telegram.WebApp.sendData("User selected Team B for the bet!");
});
