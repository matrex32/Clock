// Function to update the clock display
function updateClock() {
  const now = new Date(); // Retrieves the current date and time
  // Formats the hours, minutes, and seconds with leading zeros if necessary
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  // Updates the text content of the element with id 'clock' to show the current time
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Initializes the clock display as soon as the page loads
updateClock();

// Sets the interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
