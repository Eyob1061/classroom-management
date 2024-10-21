const form = document.getElementById("meeting-request-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !date || !time || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const requestData = {
    name,
    email,
    date,
    time,
    message,
  };

  // Send the meeting request to the server
  fetch("/api/meeting-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Meeting request sent successfully!");
        form.reset();
      } else {
        throw new Error("Failed to send meeting request.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("There was an error sending your meeting request. Please try again later.");
    });
});