window.Telegram.WebApp.ready();

document.getElementById("teamA").addEventListener("click", function () {
    console.log("Team A button clicked!");
    Telegram.WebApp.sendData("User selected Team A for the bet!");
});

document.getElementById("teamB").addEventListener("click", function () {
    console.log("Team B button clicked!");
    Telegram.WebApp.sendData("User selected Team B for the bet!");
});


// Check if the Telegram Web App object is available
if (window.Telegram && window.Telegram.WebApp) {
    // Initialize the Telegram Web App
    window.Telegram.WebApp.ready();

    console.log("Telegram Web App is ready!");

    // Add click event listener for the 'Place a Bet' button
    document.getElementById("betButton").addEventListener("click", function () {
        Telegram.WebApp.sendData("User wants to place a bet!");
    });

    // Add click event listeners for Team A and Team B buttons
    document.getElementById("teamA").addEventListener("click", function () {
        console.log("Team A button clicked!");
        Telegram.WebApp.sendData("User selected Team A for the bet!");
    });

    document.getElementById("teamB").addEventListener("click", function () {
        console.log("Team B button clicked!");
        Telegram.WebApp.sendData("User selected Team B for the bet!");
    });
} else {
    // Log an error if Telegram Web App is not available
    console.error("Telegram WebApp object is not defined. Make sure to open this app inside Telegram.");
}

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
}
