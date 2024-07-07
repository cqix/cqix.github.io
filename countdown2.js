// countdown2.js
const countdownElement2 = document.getElementById('time2');

// Set the date we're counting down to
const countdownDate2 =  new Date('July 13, 2024 10:40:00');
const countdownDateInt2 = countdownDate2.getTime();

document.getElementById('starttime2').innerHTML = countdownDate2.toLocaleString();

// Update the count down every 1 second
const x2 = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countdownDateInt2 - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    countdownElement2.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        countdownElement2.innerHTML = "Flight has departed";
    }
}, 1000);
