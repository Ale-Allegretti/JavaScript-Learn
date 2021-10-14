// var theModal = new bootstrap.Modal(document.getElementById("newTaskModal"));

function openModal(idSelector) {
    bootstrap.Modal.getOrCreateInstance(document.getElementById(idSelector)).show();
}


document.getElementById("btnNewTask").addEventListener("click", function() {
    openModal("newTaskModal");
});



// open modal
function Task(titolo, descrizione, scadenza, urgente, completato) {
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.scadenza = scadenza;
    this.urgente = urgente;
    this.completato = completato;
}

let taskList = [];
showTaskList("todo");

document.querySelector("#newTaskModal .modal-footer .btn-primary").addEventListener("click", function(){
    // validazione "titolo"
    if(document.getElementById("inputTitolo").value.length === 0) {
        // document.getElementsByClassName("invalid-feedback") [0]
        document.querySelector("#newTaskModal #inputTitolo").classList.add("is-invalid");
        return
    }
    taskList.push(
        new Task(
            document.getElementById("inputTitolo").value,
            document.getElementById("inputDescrizione").value,
            document.getElementById("inputScadenza").value,
            document.getElementById("inputUrgente").checked,
            false
        )
    );
    // creata la Modal, la chiude
    bootstrap.Modal.getInstance(document.getElementById("newTaskModal")).hide();
    console.log(taskList);
    saveToLocalStorage();
    showTaskList();
})



// una volta chiusa la NewTask => svuoto il contenuto del FORM
document.getElementById("newTaskModal").addEventListener("show.bs.modal", function() {
    document.getElementById("inputTitolo").value = "";
    document.getElementById("inputDescrizione").value = "";
    document.getElementById("inputScadenza").value = "";
    document.getElementById("inputUrgente").checked = false;
    document.querySelector("#newTaskModal #inputTitolo").classList.remove("is-invalid");
});
// chiama la ShowTaskList() corretta a seconda della selezione
document.querySelectorAll('button[data-bs-toggle="tab"]').forEach(element => {
    element.addEventListener('show.bs.tab', function (event) {
        let finale = event.target.id.substring(0, event.target.id.length - 4);
        console.log("TAB ------>", finale);
        showTaskList(finale);
    })
}); 




// SHOW TASK LIST (con parametro "todo" || "done")
function showTaskList(type){
    taskList = readFromLocalStorage();
    // filtro per completati
    taskList = taskList.filter(
        function(t) {
            if(type == "todo"){
                return t.completato === false;
            }
            else {
                return t.completato === true;
            }
        }
    )

    if(taskList.length === 0){
        document.querySelector("#" + type + ".col-12").innerHTML = '<div class="alert alert-warning">Nessun task presente</div>';
    }
    else {
        let tagList = "";
        taskList.forEach(function(t, i){
            tagList += `<div class="list-group-item p-4">
                    <div class="float-end text-muted text-end">
                        <i class="bi bi-calendar-event me-1"></i> ${t.scadenza}<br>
                        ` + (t.urgente ? `<span class="badge bg-warning">Urgente</span>` : ``) + `
                    </div>
                    <span class="h4">${t.titolo}</span>
                    <p class="mb-2 text-muted">${t.descrizione}</p>
                    `
                if(!t.completato) {  
                    tagList += `  
                    <ul class="nav">
                        <li class="nav-item">
                            <a onclick="completaTask(${i})" class="nav-link ps-0 text-success" href="#">Completa</a>
                        </li>
                        <li class="nav-item">
                            <a onclick="modificaTask(${i})" class="nav-link text-dark" href="#">Modifica</a>
                        </li>
                        <li class="nav-item">
                            <a onclick="eliminaTask(${i})" class="nav-link text-danger" href="#">Elimina</a>
                        </li>
                    </ul>
                </div>`
                }
        });
        document.querySelector("#" + type + " .col-12").innerHTML = tagList;
    }
}

function completaTask(i) {
    taskList[i].completato = true;
    saveToLocalStorage();
    showTaskList();
}

function modificaTask(i) {
    alert("Not implemented");
    /* 
    * modifica della openModal, magari creandone una tipo openModalMod
    * prepolare i campi
    * gestire il save
    * taskList[i] = nuovoOggetto
    * save
    * show
    */
}

function eliminaTask(i) {
    alert("Not implemented");
    // taskList.splice(...)
}




// Persistenza tramite il localStorage 
function saveToLocalStorage() {
    localStorage.setItem("LS_TASK_LIST", JSON.stringify(taskList));
}
function readFromLocalStorage() {
    // se trovata una lista nel task di Storage -> return Lista
    // sennò return array vuoto
    let data = localStorage.getItem("LS_TASK_LIST");
    if(!data) { return [] ;}
    else {
        let lsArray = JSON.parse(data);     // array di oggetti
    
        let myTaskList = [];
        lsArray.forEach(function(obj) {
            myTaskList.push(
                new Task(
                    obj.titolo,
                    obj.descrizione,
                    obj.scadenza,
                    obj.urgente,
                    obj.completato
                )
            );
        });
        return myTaskList;
    }
}


