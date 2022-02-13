// Send user inputed data to server endpoint for sign up verification api/users/ POST
async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.getElementById("input-name").value.trim();
  const username = document.getElementById("input-username").value.trim();
  const password = document.getElementById("input-password").value.trim();
  const email = document.getElementById("input-email").value.trim();
  const about = document.getElementById("input-about").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        about
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("signup-form").addEventListener("submit", signupFormHandler);
