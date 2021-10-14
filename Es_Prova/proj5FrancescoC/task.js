/* 
    Constants 
    Gli scrivo una volta così sono sicuro
    di non sbagliare a scrivergli successivamente
    (dato che VS Code me li suggerisce)
*/
const ADD_NEW_TASK_MODAL = "newTaskModal";
const TASK_LIST = "TASK_LIST";
const COMPLETED_TASK = "COMPLETATI";
const ONGOING_TASK = "IN_CORSO";

/* Se il primo valore ritorna 'null', verrà preso l'array vuoto */
/* Viceversa, se il localStorage ha la task list, verrà assegnato quell'array */
const taskList = getDataFromLocalStorage() || [];

/* DOM Elements */
const openAddModal = document.getElementById("add-task");
const addNewTaskBtn = document.querySelector(
  `#${ADD_NEW_TASK_MODAL} .modal-footer .btn-primary`
);

openAddModal.addEventListener("click", () => {
  openModal(ADD_NEW_TASK_MODAL);
  document.getElementById("inputTitolo").value = "";
  document.getElementById("inputDescrizione").value = "";
  document.getElementById("inputScadenza").value = "";
  document.getElementById("inputUrgenza").value = "";
  document.getElementById("inputTitolo").classList.remove("is-invalid");
});

addNewTaskBtn.addEventListener("click", () => {
  addNewTask();
  showTaskList();
});

showTaskList();

/* Functions */
function openModal(idSelector) {
  const currentModalEl = document.getElementById(idSelector);
  bootstrap.Modal.getOrCreateInstance(currentModalEl).show();
}

function closeModal(idSelector) {
  const currentModalEl = document.getElementById(idSelector);
  bootstrap.Modal.getOrCreateInstance(currentModalEl).hide();
}

function addNewTask() {
  const titolo = document.getElementById("inputTitolo");
  const descrizione = document.getElementById("inputDescrizione");
  const scadenza = document.getElementById("inputScadenza");
  const urgenza = document.getElementById("inputUrgenza");

  /* 
    Corrispettivo di titolo.length === 0,
    descrizione.length === 0,
    scadenza.length === 0

    ('falsey values', se cercate su MDN )
    le stringhe vuote sono tra quelli.
  */
  if (!titolo.value || !descrizione.value || !scadenza.value) {
    if (!titolo.value) {
      titolo.classList.add("is-invalid");
    }
    return;
  }

  const newTask = new Task(
    titolo.value,
    descrizione.value,
    scadenza.value,
    false, // <-- completato (inizialmente falso per tutti)
    urgenza.value || "low" // se urgenza non è una stringa vuota, verrà preso il suo valore
    // altrimenti prendiamo come valore la stringa "low"
  );

  // Salvo nell'array e nel localStorage
  taskList.push(newTask);
  saveToLocalStorage(taskList);

  closeModal(ADD_NEW_TASK_MODAL);
  showTaskList();
}

function showTaskList(type = "") {
  let listToShow;

  /*
    NOTA: soluzione 'one-liner'
    il doppio && è un altro operatore
    condizionale di JS
    (reference MDN qui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
    in pratica è come scrivere:

    if (el.completo [se è vero]) {
        return el;
    }
  */
  switch (type) {
    case COMPLETED_TASK:
      listToShow = taskList.filter((el) => el.completo && el);
      break;
    case ONGOING_TASK:
      listToShow = taskList.filter((el) => !el.completo && el);
      break;
    default:
      listToShow = taskList;
      break;
  }

  const alertEl = document.getElementById("alert");
  const theListEl = document.getElementById("theList");

  if (taskList.length > 0) {
    alertEl.classList.add("hide");

    let tagList = "";

    // Attacco i task al DOM
    listToShow.forEach((task, index) => {
      tagList += `
        <div class="col mt-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${task.titolo}</h5>
            <p class="card-text">
              ${task.descrizione}
            </p>
            <p class="card-text">
              <i class="bi bi-calendar-date"></i> ${task.scadenza}
            </p>
            <p>Urgenza: <i class="bi bi-square-fill ${task.urgenza}"></i></p>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                ${task.completo ? "checked" : ""}
                onchange="completeTask(${index})"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Completato?</label
              >
            </div>
            <hr />
            <button onclick="modifyItem(${index})" class="btn btn-warning">
              Modifica <i class="bi bi-pencil"></i>
            </button>
            <button onclick="deleteItem(${index})" class="btn btn-danger">
              Elimina <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
        `;
    });

    // Aggiungo i task all'elemento lista
    theListEl.innerHTML = tagList;
  } else {
    alertEl.classList.remove("hide");
  }
}

function completeTask(i) {
  // Metto il valore inverso rispetto a quello corrente (se è vero passa a falso e viceversa)
  taskList[i].completo = !taskList[i].completo;
  saveToLocalStorage(taskList);
  showTaskList();
}

function modifyItem(i) {
  // Da fare
  alert("ok");
}

function deleteItem(i) {
  // Da rivedere (non funziona bene... 😔)
  const filteredTaskList = taskList.filter((el, index) => index !== i && el);
  saveToLocalStorage(filteredTaskList);
  showTaskList();
}

function saveToLocalStorage(arr) {
  localStorage.setItem(TASK_LIST, JSON.stringify([...arr]));
}

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem(TASK_LIST));
}

/* Constructor function */
function Task(titolo, descrizione, scadenza, completato, urgenza) {
  this.titolo = titolo;
  this.descrizione = descrizione;
  this.scadenza = scadenza;
  this.completo = completato;
  this.urgenza = urgenza;
}
