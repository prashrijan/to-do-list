const input = document.getElementById("input");
const submit = document.getElementById("submit");
const listItems = document.getElementById("listContainer");

function updateTask(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listItems.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}

submit.onclick = function(){

    if(input.value === ''){
        alert("Please enter a task");
    }

    else{
        updateTask();
    }

    input.value = "";
    saveData();
}


window.addEventListener("keydown", (event)=>{

    if (event.key === "Enter"){
        if (input.value !== ""){
            updateTask();
        }

        else{
            alert("Please enter a task");
        }

        input.value = "";
        saveData();
    }

})

listItems.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data", listItems.innerHTML);
}

function displayData(){
   listItems.innerHTML =  localStorage.getItem("data");
}

displayData();