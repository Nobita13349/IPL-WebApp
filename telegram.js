// Ensuring Telegram WebApp is ready
window.Telegram.WebApp.ready();

// Log and send data when "Team A" is clicked
document.getElementById("teamA").addEventListener("click", function () {
    console.log("Team A button clicked!"); // This logs to the console
    Telegram.WebApp.sendData("User selected Team A for the bet!");
});

// Log and send data when "Team B" is clicked
document.getElementById("teamB").addEventListener("click", function () {
    console.log("Team B button clicked!"); // This logs to the console
    Telegram.WebApp.sendData("User selected Team B for the bet!");
});
