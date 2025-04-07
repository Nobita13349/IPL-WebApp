window.Telegram.WebApp.ready();

document.getElementById("teamA").addEventListener("click", function () {
    console.log("Team A button clicked!");
    Telegram.WebApp.sendData("User selected Team A for the bet!");
});

document.getElementById("teamB").addEventListener("click", function () {
    console.log("Team B button clicked!");
    Telegram.WebApp.sendData("User selected Team B for the bet!");
});
