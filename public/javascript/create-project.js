async function createFormHandler(event) {
  event.preventDefault();

  const project_name = document.getElementById("proj-name").value.trim();
  const content = document.getElementById("proj-description").value.trim();
  // const task = document.getElementById("proj-task").value.trim();

  if (project_name && content) {
    const response = await fetch("/api/project/", {
      method: "post",
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