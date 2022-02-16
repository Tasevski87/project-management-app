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
      let prevWindow = document.referrer;
      if (
        prevWindow === "http://localhost:3001/login" ||
        prevWindow === "http://localhost:3001/"
      ) {
        document.location.replace("/dashboard");
      } else {
        window.location = prevWindow;
      }
    } else {
      alert(response.statusText);
    }
  }
}

console.log(document.referrer);
document.getElementById("login").addEventListener("click", login);
