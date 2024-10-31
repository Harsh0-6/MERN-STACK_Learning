document.addEventListener('DOMContentLoaded', () => {
    
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        // Create complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = '✔️';
        completeButton.onclick = () => {
            li.classList.toggle('completed');
        };

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for the add task button
    addTaskButton.addEventListener('click', addTask);

    // Optional: Allow pressing Enter key to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});