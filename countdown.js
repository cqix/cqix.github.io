// countdown.js
const countdownElement = document.getElementById('time');

// Set the date we're counting down to
const countdownDate =  new Date('July 13, 2024 10:40:00');
const countdownDateInt = countdownDate.getTime();

document.getElementById('starttime').innerHTML = countdownDate.toLocaleString();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countdownDateInt - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "Flight has departed";
    }
}, 1000);
