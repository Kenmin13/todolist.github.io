document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input");
        const taskDeadline = document.getElementById("task-deadline");
        const taskPriority = document.getElementById("task-priority");
        const taskCategory = document.getElementById("task-category");

        const task = {
            text: taskInput.value,
            deadline: taskDeadline.value,
            priority: taskPriority.value,
            category: taskCategory.value
        };

        addTask(task);

        taskForm.reset();
    });

    function addTask(task) {
        const li = document.createElement("li");
        li.classList.add(task.priority);

        const taskDetails = document.createElement("div");
        taskDetails.classList.add("task-details");

        const taskText = document.createElement("span");
        taskText.textContent = `Task: ${task.text}`;
        taskDetails.appendChild(taskText);

        const taskDeadline = document.createElement("span");
        taskDeadline.textContent = `Deadline: ${task.deadline}`;
        taskDetails.appendChild(taskDeadline);

        const taskCategory = document.createElement("span");
        taskCategory.textContent = `Category: ${task.category}`;
        taskDetails.appendChild(taskCategory);

        li.appendChild(taskDetails);

        const taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");

        const doneButton = document.createElement("button");
        doneButton.classList.add("done-button");
        doneButton.textContent = "Complete";
        doneButton.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        taskActions.appendChild(doneButton);
        taskActions.appendChild(deleteButton);
        li.appendChild(taskActions);

        taskList.appendChild(li);
    }
});


