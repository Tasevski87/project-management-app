// Send user inputed data to server endpoint api/users/login POST
async function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      window.location=document.referrer;
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("login").addEventListener("click", login);
