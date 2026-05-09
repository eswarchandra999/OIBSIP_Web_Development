/**
 * AGENDA - Task Manager
 * A human-written script focusing on clarity and persistence.
 */

// Global state - Load from LocalStorage or start with empty array
let tasks = JSON.parse(localStorage.getItem("agenda_tasks")) || [];

// DOM Elements
const addButton = document.querySelector("#addButton");
const inputText = document.querySelector("#inputText");
const listContainer = document.querySelector("#listContainer");

/**
 * Renders the tasks array to the UI
 */
function renderTasks() {
    listContainer.innerHTML = "";

    if (tasks.length === 0) {
        listContainer.innerHTML = '<p class="empty-msg">Your agenda is clear for now.</p>';
        return;
    }

    tasks.forEach(task => {
        // Create main task container
        const div = document.createElement("div");
        div.className = `task-item ${task.completed ? "completed" : ""}`;

        // Create task text
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;
        span.title = "Click to toggle completion";
        span.onclick = () => toggleTask(task.id);

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "remove-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => removeTask(task.id);

        div.append(span, deleteBtn);
        listContainer.appendChild(div);
    });
}

/**
 * Adds a new task to the list
 */
function handleAddTask() {
    const text = inputText.value.trim();

    if (text === "") {
        return; // Prevents empty tasks
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    syncData();
    inputText.value = "";
    inputText.focus();
}

/**
 * Toggles the 'completed' status of a task
 */
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    syncData();
}

/**
 * Removes a task from the array
 */
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    syncData();
}

/**
 * Saves current state to LocalStorage and refreshes UI
 */
function syncData() {
    localStorage.setItem("agenda_tasks", JSON.stringify(tasks));
    renderTasks();
}

// --- Event Listeners ---

// Click Add Button
addButton.addEventListener("click", handleAddTask);

// Press Enter Key
inputText.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleAddTask();
    }
});

// Initial Render on Page Load
renderTasks();
