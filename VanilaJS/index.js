//  Practice of basic 

/*
    console.log('I\'m working');
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun"];

    const Jack = {
        name: "Jack",
        age: 32,
        gender: "Male",
        isStudent: false
    };

    console.log(daysOfWeek);
    console.log(daysOfWeek[2]);
    console.log(Jack.name);
    Jack.name = "Jack Jack";
    console.log(Jack.name);
    console.log(Jack);
    //doSomething("Dan");

    function doSomething (words)
    {
    return `Hello, are you ${words}?`;
    }

    const greetDan = doSomething("Dan Dan");

    console.log(greetDan);

    const calculator = {
        add: function(a, b)
        {
            return a + b;
        },
        sub: function(a, b)
        {
            return a - b;
        },
        mult: function(a, b)
        {
            return a * b;
        },
        div: function(a,b)
        {
            return a / b;
        },
        pow: function(a, b)
        {
            // Another way, using for
            // const base = a;
            // for (let index = 1; index < b; index++) {
            //     a *= Base;           
            // }
            // return a;

            
            return a ** b;
        }
    }

    console.log(calculator.add(3,7));
    console.log(calculator.pow(2,3));
*/

const title = document.querySelector("#title");
title.innerHTML = "Hi? This is from JS";
document.title = "PowerJS";
const button = document.querySelector("#changer");

const BASE_COLOR = "rgb(89, 174, 245)";
const SECOND_COLOR = "#eb4d4b";

function handleClick(event)
{
   const currentColor = title.style.color;
   console.log(SECOND_COLOR);
   if(currentColor == BASE_COLOR)
   {
       title.style.color = SECOND_COLOR;
   }
   else
   {
       title.style.color = BASE_COLOR;
   }
}
function init()
{
    title.style.color = BASE_COLOR;
    button.addEventListener("click", handleClick);
}
init();

