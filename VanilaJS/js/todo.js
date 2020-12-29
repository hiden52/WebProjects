const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");


const TODOS_LS = 'todos';

function paintTodo(text)
{
    const todoLi = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "✂";
    const span = document.createElement("span");
    span.innerText = text;
    todoLi.appendChild(span);
    todoLi.appendChild(delBtn);

    todoList.appendChild(todoLi);
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";

}

function loadTodos()
{
    const todos = localStorage.getItem(TODOS_LS);

    if(todos !== null)
    {
        
    }   //  this form is allways showing
}

function init()
{
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit)
}

init();