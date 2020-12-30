const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");


const TODOS_LS = 'todos';
let todos = [];   // list of TODO list 


function filterfunc(todo)
{
    return todo.id ===1;
}

function delTodo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodos = todos.filter(function(todo)
        {
            //console.log(todo.id, li.id);
            return todo.id != parseInt(li.id);
        }
    );
    todos = cleanTodos;
    saveTodos();
}

function saveTodos()
{
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text)
{
    const todoLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;   

    delBtn.innerText = "✂";
    delBtn.addEventListener("click", delTodo);    

    span.innerText = text;
    todoLi.appendChild(delBtn);
    todoLi.appendChild(span);    
    todoLi.id = newId;
    todoList.appendChild(todoLi);

    const todoObj =
    {
        text: text,
        id: newId,
    };
    todos.push(todoObj);
    saveTodos();
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
    const loadedTodos = localStorage.getItem(TODOS_LS);

    if(loadedTodos !== null)
    {
        const parsedTodo = JSON.parse(loadedTodos);
        parsedTodo.forEach(function(todo)
            {
                paintTodo(todo.text);
            }
        );

    }   //  this form is allways showing
}

function init()
{
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit)
}

init();