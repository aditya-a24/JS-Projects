const form = document.getElementById("form"); // get form element in form variable
const input = document.getElementById("input"); // get input in input variable
const todos = document.getElementById("todos"); // get ul element in todos variable

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addToDo();
});

function addToDo() {
  const todoText = input.value; // input value comes in todoText variable

  if (todoText) {
    const todoEl = document.createElement("li"); // creating a li element if todo is not null
    todoEl.innerText = todoText; // inputted value comes in innerText of li

    //adding todo
    todos.appendChild(todoEl); // created list with inputted value added to shown list

    input.value = ""; // Empty the input field after adding a todo

    // Marking completed
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed"); // toggle betweem two class
    });

    // Delete
    todoEl.addEventListener("contextmenu", (e) => {
      // Right click to delete
      e.preventDefault();
      todoEl.remove();
    });
  }
}
