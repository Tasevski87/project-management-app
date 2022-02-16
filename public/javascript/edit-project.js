async function createFormHandler(event) {
  event.preventDefault();

  const project_name = document.getElementById("proj-name").value.trim();
  const content = document.getElementById("proj-description").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (project_name && content) {
    const response = await fetch(`/api/project/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        project_name,
        content,
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

document.getElementById("create-form").addEventListener("submit", createFormHandler);