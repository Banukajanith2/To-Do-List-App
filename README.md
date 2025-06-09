# 📝 Simple To-Do List App

This is a lightweight and beginner-friendly To-Do List web application built using HTML, CSS, and JavaScript. It uses JavaScript arrays and DOM manipulation to manage tasks dynamically without the need for external libraries or frameworks.

## 🚀 Features

- Add tasks with a due date
- Display tasks in a styled list
- Remove individual tasks
- Updates in real-time using JavaScript arrays and loops
- Persistent storage using localStorage

## 📁 Project Structure

.
├── index.html
├── styles/
│ └── style.css
├── img/
│ └── background.jpg
└── script.js


## 🧠 How It Works

- Tasks are stored in an in-memory array (`taskArray`)
- Then it's stored in `localStorage` for persistence
- When you add a task, it is pushed to the top of the list
- The UI updates by re-rendering the array with each change
- The delete button removes the task from the array using `splice()` and refreshes the display


## 💡 Future Improvements

- Add task priority or categories
- Include animations or filters
