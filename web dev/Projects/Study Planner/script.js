
//To-Do list js

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//Timer Js

let focusButton = document.getElementById("Focus");
let buttons = document.querySelectorAll(".btn");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("btn-start");
let reset = document.getElementById("btn-reset");
let pause = document.getElementById("btn-pause");
let time = document.getElementById("time");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`; 

const appendZero = (value) => {
    value = value < 10 ? `0${value}`:value;
    return value;
};

reset.addEventListener("click", (
    resetTime = () => {
        pauseTimer();
        switch(active){
            case "long":
                minCount = 14;
                break;
            case "short":
                minCount = 4;
                break;
                default:
                    minCount = 24;
                    break;
        }
        count = 59;
        time.textContent = `${minCount + 1}:00`;
    })
);

const removeFocus = () => {
    buttons.forEach(
        (btn) => {
            btn.classList.remove("btn-focus");
        });
};

focusButton.addEventListener("click", () => {
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`;
});

shortBreakButton.addEventListener("click", () => {
    active = "short";
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 4;
    count - 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

longBreakButton.addEventListener("click", () => {
    active = "long";
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    minCount = 14;
    count - 59;
    time.textContent = `${appendZero(minCount + 1)}:00`;
});

pause.addEventListener(
    "click",
    (
        pauseTimer = () => {
            paused = true;
            clearInterval(set);
            startBtn.classList.remove("hide");
            pause.classList.remove("show");
            reset.classList.remove("show");
        }
    )
);

startBtn.addEventListener("click", () => {
    reset.classList. add("show") ;
    pause.classList.add("show");
    startBtn.classList.add("hide");
    startBtn.classList.remove("show");
    if (paused) {
        paused = false;
        time.textContent = `${appendZero
        (minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero
            (minCount)}:${appendZero(count)}`;
            if(count == 0){
                if(minCount !=0) {
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
});

// mini calendar js

const minidate = document.getElementById("mini-date");
const miniday = document.getElementById("mini-day");
const minimonth = document.getElementById("mini-month");
const miniyear = document.getElementById("mini-year");

const today = new Date();
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","May","June","July","August"
,"September","October","November","December"];

minidate.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
miniday.innerHTML = weekDays[today.getDay()];
minimonth.innerHTML = allMonths[today.getMonth()];
miniyear.innerHTML = today.getFullYear();
