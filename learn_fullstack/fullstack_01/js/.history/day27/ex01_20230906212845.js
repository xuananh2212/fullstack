var todo = docuemnt.querySelector(".todo");
var todoList = document.querySelector(".todo-list");
var todoForm = todo.querySelector(".form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.chidren[0];
  var doName = inputEl.value;
  if (!doName.length) {
    return;
  }
  todoList.innerHTML += `<p>${doName}</p>`;
  inputEl.value = "";
});
