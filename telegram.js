if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();

    document.getElementById("betButton").addEventListener("click", function () {
        Telegram.WebApp.sendData("User wants to place a bet!");
    });

    document.getElementById("teamA").addEventListener("click", function () {
        Telegram.WebApp.sendData("User selected Team A for the bet!");
    });

    document.getElementById("teamB").addEventListener("click", function () {
        Telegram.WebApp.sendData("User selected Team B for the bet!");
    });
} else {
    console.error("Telegram WebApp is not defined. Open this app inside Telegram.");
}
