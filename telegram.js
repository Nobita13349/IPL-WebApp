document.addEventListener("DOMContentLoaded", function () {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        console.log("Telegram Web App is ready!");

        document.getElementById("placeBet").addEventListener("click", function () {
            let betAmount = document.getElementById("betAmount").value;
            
            if (betAmount && betAmount > 0) {
                Telegram.WebApp.sendData(`User placed a bet of ₹${betAmount}`);
                console.log(`Bet placed: ₹${betAmount}`);
            } else {
                console.error("Invalid bet amount entered.");
            }
        });

        document.getElementById("teamA").addEventListener("click", function () {
            console.log("Team A button clicked!");
            Telegram.WebApp.sendData("User selected Team A for the bet!");
        });

        document.getElementById("teamB").addEventListener("click", function () {
            console.log("Team B button clicked!");
            Telegram.WebApp.sendData("User selected Team B for the bet!");
        });
    } else {
        console.error("Telegram WebApp object is not defined. Open this app inside Telegram.");
    }
});
