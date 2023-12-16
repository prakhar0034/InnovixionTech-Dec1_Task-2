function startCountdown() {
    // Get the target date from the input
    const targetDateInput = document.getElementById("targetDate");
    const targetDateValue = targetDateInput.value;
  
    // Validate the input
    if (!targetDateValue) {
      alert("Please enter a valid target date.");
      return;
    }
  
    // Convert the input value to a Date object
    const countDownDate = new Date(targetDateValue.replace("T", " ")).getTime();
  
    // Hide the form and display the countdown timer
    document.getElementById("countdownForm").style.display = "none";
    document.getElementById("timer").style.display = "block";
  
    // Update the countdown every 1 second
    const x = setInterval(function () {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time
      const distance = countDownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById("days").innerHTML = days + "d ";
      document.getElementById("hours").innerHTML = hours + "h ";
      document.getElementById("minutes").innerHTML = minutes + "m ";
      document.getElementById("seconds").innerHTML = seconds + "s ";
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  