// countdown2.js
const countdownElement1 = document.getElementById('time1');

// Set the date we're counting down to
const countdownDate1 =  new Date('July 12, 2024 13:20:00');
const countdownDateInt1 = countdownDate1.getTime();

document.getElementById('starttime1').innerHTML = countdownDate1.toLocaleString();

// Update the count down every 1 second
const x1 = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countdownDateInt1 - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    countdownElement1.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        countdownElement1.innerHTML = "Flight has departed";
    }
}, 1000);
