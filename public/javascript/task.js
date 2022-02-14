// Send user inputed data to server endpoint api/tasks POST
async function taskFormHandler(event) {
  event.preventDefault();

  const task_name = document.getElementById("task-name").value.trim();
  const task_description = document.getElementById("task-description").value.trim();

  const project_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 2
  ];

  if (task_name && task_description) {
    const response = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify({
        task_name,
        task_description,
        project_id,
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

document.getElementById("task-btn").addEventListener("click", taskFormHandler);
