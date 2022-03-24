
const inputTodo = document.querySelector(".todo-text");
const buttonTodo = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");
const count = document.querySelector(".numitem");

let c = 0;

/* Event for adding the items in the list */
buttonTodo.addEventListener('click', addtodolist);

/* function for adding the items */
function addtodolist(e) {
    e.preventDefault();
    /* creating a new DIV*/
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo-item');

    /* creating a checklist button*/
    const newCheckButton = document.createElement('button');
    newCheckButton.classList.add('todo-item-btn');
    newCheckButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    newDiv.appendChild(newCheckButton);

    /* adding the data to the list*/
    const newList = document.createElement('li');
    newList.innerText = inputTodo.value;
    newList.classList.add('todo-item-list');
    newDiv.appendChild(newList);

    /* creating a delete button to remove the item once done */
    const newDeleteButton = document.createElement('button');
    newDeleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    newDeleteButton.classList.add('todo-delete-btn');
    newDiv.appendChild(newDeleteButton);

    c = c + 1;
    /* Appending the newly created div to its parent div */
    todoList.appendChild(newDiv);
    inputTodo.value = " ";
    count.innerText = c;

}

/* Event for removing the item */
todoList.addEventListener('click', removeitem);

/* function for removing the item */
function removeitem(e) {
    const remItem = e.target;

    if (remItem.classList[0] === "todo-delete-btn") {
        remItem.parentElement.remove();
        c = c - 1;
        count.innerText = c;
    }

}

/* Event for Checklist */

todoList.addEventListener('click', checklist);

/* Function for checklisting item */
function checklist(e) {
    const checkitem = e.target;
    if (checkitem.classList[0] === "todo-item-btn") {
        checkitem.parentElement.classList.toggle("done");
    }
}


