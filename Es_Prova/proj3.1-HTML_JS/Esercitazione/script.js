

let p = document.getElementById("lista");
let buttonAdd = document.getElementById("addTodo");
let buttonDel = document.getElementById("deleteTodo");
let taskIn = document.getElementById("todo");
let taskDel = document.getElementById("delete");


function aggiungiTask(task) {
    let li = document.createElement("LI");
    li.textContent = task;
    p.appendChild(li);
}

function deleteTask(task) {
    p.children.item((task - 1)).remove();
}


buttonAdd.addEventListener('click', (e) => {
    let task = taskIn.value;
    if(task == null || task.length == 0) {
        console.error("Inserire un task non vuoto");
    } 
    aggiungiTask(task);
    taskIn.value = "";
});

buttonDel.addEventListener('click', (e) => {
    let task = Number(taskDel.value);
    if(isNaN(task) || task > p.children.length ) {
        alert("Inserire un indice valido");
    }
    else if(task <= 0) {
        alert("Non posso elimare indici minori di 1");
    }
    else {
        if(confirm(`Sicuro di voler eliminare il task n. ${task}?`)) {
            deleteTask(task);
        }
    }
    taskDel.value = "";
});


fetch("./books.json")
.then(response => {
    return response.json();
})
.then(books => {
    console.log("Libri ottenuti dalla WS", books);
})
.catch(error => {
    console.error(error);
})