// Get the elements representing the item shop timer
const itemshop_timer = document.querySelectorAll('.ItemShop__Timer');

// Set the target time for item shop reload (12:00 AM)
const targetHour = 0; // 12 AM
const targetMinute = 0; // 0 minute
const targetSecond = 0; // 0 second

// Update the timer every second
setInterval(updateTimer, 1000);

// Function to update the timer
function updateTimer() {
    // Get the current time
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Calculate the time left until the target time
    let hoursLeft, minutesLeft, secondsLeft;
    if (currentHour < targetHour || (currentHour === targetHour && currentMinute < targetMinute) || (currentHour === targetHour && currentMinute === targetMinute && currentSecond < targetSecond)) {
        hoursLeft = targetHour - currentHour;
        minutesLeft = targetMinute - currentMinute;
        secondsLeft = targetSecond - currentSecond;
    } else {
        // If the target time has already passed, calculate the time left until the next day
        hoursLeft = 24 - currentHour + targetHour;
        minutesLeft = 60 - currentMinute + targetMinute;
        secondsLeft = 60 - currentSecond + targetSecond;
    }

    // Update the timer display
    const timeLeft = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    itemshop_timer.forEach(timer => {
        timer.textContent = timeLeft;
    });
}



// LIGHT BOX : SUPPORT A CREATOR :



function closeLightbox(){
    const lightBox = document.getElementById('lightbox');

    lightBox.style.display ='none';
}

function OpenLightbox(){
    const lightBox = document.getElementById('lightbox');

    lightBox.style.display ='block';
}