

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Add event listener for the "keyup" event which will call the addTask function when we press "Enter->keycode 13"
inputBox.addEventListener("keyup", function (event) {
    // Check if the key pressed is the "Enter" key (key code 13)
    if (event.keyCode === 13) {
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// Save Data to the localStorage 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//get data from the localstorage and display the data

function displayTaskList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTaskList();

