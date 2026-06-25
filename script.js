// 1. Select the elements we need from the HTML (The DOM)
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const errorMessage = document.getElementById('errorMessage');

// 2. Add an Event Listener to the Add button
addButton.addEventListener('click', function() {
    
    // Get the text the user typed
    const taskText = taskInput.value;

    // 3. Form Validation: Check if the input is empty
    if (taskText === '') {
        // Show the error message by removing the 'hidden' class
        errorMessage.classList.remove('hidden');
        return; // Stop the function here so it doesn't add an empty task
    } else {
        // Hide the error message if it was previously showing
        errorMessage.classList.add('hidden');
    }

    // 4. Create the new list item (<li>)
    const li = document.createElement('li');
    li.textContent = taskText;

    // 5. Toggle 'completed' status when the list item is clicked
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // 6. Create the Delete button for this task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add an event listener to the delete button to remove the task
    deleteBtn.addEventListener('click', function(event) {
        // Prevent the 'li' click event from firing when we click delete
        event.stopPropagation(); 
        taskList.removeChild(li);
    });

    // 7. Assemble everything: Put the delete button inside the li, and the li inside the ul
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = '';
});