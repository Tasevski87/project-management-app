let avatar = "/images/def-avatar.png"; // default avatar if none selected

// Send user inputed data to server endpoint for sign up verification api/users/ POST
async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.getElementById("input-name").value.trim();
  const username = document.getElementById("input-username").value.trim();
  const password = document.getElementById("input-password").value.trim();
  const email = document.getElementById("input-email").value.trim();
  const about = document.getElementById("input-about").value.trim();

  if (name && username && password && email && about) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        avatar,
        about,
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

// avatar selection functionality
const avatarSel = document.querySelectorAll(".buttons");

avatarSel.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.src) {
      avatar = String(event.target.src);
    }
  });
});

// avatar highlighter
$("button").on("click", function () {
  $("button").removeClass("active");
  $(this).addClass("active");
});

document
  .getElementById("signup-form")
  .addEventListener("submit", signupFormHandler);
