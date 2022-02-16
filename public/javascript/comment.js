// Send user inputed data to server endpoint api/comment POST
async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.getElementById("comment").value.trim();

  const project_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 2
  ];

  if (comment_text) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        project_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("comment-btn")
  .addEventListener("click", commentFormHandler);
