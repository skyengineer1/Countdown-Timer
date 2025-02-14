let timer;

function startCountdown() {
    const input = document.getElementById("timeInput");
    let time = parseInt(input.value, 10);
    const display = document.getElementById("timerDisplay");
    
    if (isNaN(time) || time <= 0) {
        display.textContent = "Please enter a valid time in seconds.";
        return;
    }
    
    clearInterval(timer);
    
    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            display.textContent = "Time's up!";
        } else {
            display.textContent = `${time} seconds remaining`;
            time--;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startButton").addEventListener("click", startCountdown);
});
