let listItemArray = [];
if (localStorage.getItem("listItems") === null) {
    listItemArray = [
        { content: "zakwas z buraków", done: false },
        { content: "4 korzenie pietruszki", done: false },
        { content: "8 jabłek", done: false },
        { content: "jarmuż", done: false },
        { content: "mix sałat", done: false },
        { content: "rzodkiewka", done: false },
        { content: "10 pomidorów", done: false },
        { content: "3 czerwone papryki", done: false },
        { content: "4 ogórki", done: false },
        { content: "seler", done: false },
        { content: "cytryna", done: false },
        { content: "kapusta pekińska", done: false },
        { content: "ogórek kiszony", done: false },
        { content: "4 buraki", done: false },
        { content: "10 marchwii", done: false },
        { content: "kiszona kapusta", done: false },
        { content: "2 cukinie", done: false },
        { content: "4x pomidory w puszce", done: false },
        { content: "3 cebule", done: false },
        { content: "szczypior", done: false },
        { content: "seler naciowy", done: false },
    ];
  }else{
      listItemArray = JSON.parse(localStorage.getItem("listItems"));
  };



const clearInputText = () => {
    const inputField = document.querySelector(".js-form__item");
    inputField.value = "";
};

const checkItem = () => {
    const check = document.querySelectorAll(".taskList__itemCheck");
    check.forEach((checkBox, index) => {
        checkBox.addEventListener("click", () => {
            listItemArray[index].done ? listItemArray[index].done = false : listItemArray[index].done = true;
            displayList();
        });
    });
};

const deleteItem = () => {
    const removes = document.querySelectorAll(".taskList__itemDelete");
    removes.forEach((remove, index) => {
        remove.addEventListener("click", () => {
            listItemArray.splice(index, 1);
            displayList();
        });
    });
};

const displayList = () => {
    localStorage.setItem("listItems", JSON.stringify(listItemArray));
    let list = "";
    for (const product of listItemArray) {
        list += `<li class="taskList__item"><input type="button" ${product.done ? "value =\"&#x2713\"" : ""} class="taskList__itemCheck"></button><span ${product.done ? "style=\"text-decoration: line-through\"" : ""} class="taskList__text">${product.content}</span><button class="taskList__itemDelete"><i class="icon-trash-empty">&#xe801;</i></button></li>`;
    };
    document.querySelector(".js-taskList__element").innerHTML = list;
    clearInputText();
    checkItem();
    deleteItem();
};
displayList();

const addTask = () => {
    const newTask = document.querySelector(".js-form__item").value.trim();
    if (newTask === "") {
        return;
    };
    listItemArray.push({
        content: newTask,
        done: false,
    });
    displayList();
};

const onSubmitForm = (event) => {
    event.preventDefault();
    document.querySelector(".js-form__item").focus();
    addTask();

};

const form = document.querySelector(".js-form");
form.addEventListener("submit", onSubmitForm);
