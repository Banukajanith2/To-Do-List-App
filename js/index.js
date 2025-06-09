// Initialize an empty global array to store the tasks
let taskArray = [];

function displayStoredTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskArray = storedTasks; // get taskArray from localStorage and set it to taskArray[]
  updateArray(); // Now update the HTML
  console.log(taskArray);
}

document.addEventListener("DOMContentLoaded", function () {
  displayStoredTasks();
});

function addToList() {
  const task = document.getElementById("text-input");
  const dateInput = document.getElementById("date-input");
  const timeInput = document.getElementById("time-input");
  const name = task.value.trim(); //trim() removes whitespace in a string at start and end
  const date = dateInput.value;
  const time = timeInput.value;

  if (name && date && time) {
    taskArray.unshift({ name: name, date: date, time: time }); // Add new task to start of array
    localStorage.setItem("tasks", JSON.stringify(taskArray)); // Save to localStorage
    updateArray(); // update the array

    task.value = ""; //clear input fields
    dateInput.value = "";
    timeInput.value = "";
  } else {
    Swal.fire({
      title: '!!!',
      text: 'Please enter Task, Date & Time!',
      showCloseButton: true,
      heightAuto: false,
      background: 'rgba(106, 106, 106, 0.8)', // dark grey
      customClass: {
        popup: 'custom-popup',
        closeButton: 'custom-close'
      }
    });
  }
}

// Function to render the current state of taskArray in the HTML
function updateArray() {
  let todoHTML = "";

  // Loop through each item in taskArray
  for (let index = 0; index < taskArray.length; index++) {
    const ArrayObj = taskArray[index]; // Get the current item
    const name = ArrayObj.name; // Get the name of the current item
    const date = ArrayObj.date; // Get the date of the current item
    const time = ArrayObj.time; // Get the time of the current item
    const html = `
          <div class="block">
            <p class="task1">• ${name}</p>
            <div class="date-time1">
              <p class="date1">${date}</p>
              <p class="time1">${time}</p>
            </div>
            <button class="dltbtn" onclick="deleteTask(${index})">X</button>
          </div>`;
    todoHTML += html; // Append to the HTML string
  }
  console.log(todoHTML); // Log the current HTML (optional for debugging)

  // Set the inner HTML of the display div to the generated HTML
  document.getElementById("js-text-div").innerHTML = todoHTML;
}

function deleteTask(index) {
  taskArray.splice(index, 1); // Remove the item from the array
  localStorage.setItem("tasks", JSON.stringify(taskArray)); // Update localStorage
  updateArray(); // Refresh the displayed list
}
