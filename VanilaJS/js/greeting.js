const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

                // currentUser is a Key of storage
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text)
{
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event)
{
    event.preventDefault(); 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text)
{
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
    console.log(`paintGreting is running`);
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null)
    {
        askForName();
        //console.log(`currentUser is not null`);
    }
    else
    {
        paintGreeting(currentUser);
    }

}

function init()
{
    loadName();
}
init();