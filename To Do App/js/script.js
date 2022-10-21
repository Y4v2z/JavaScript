const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
// const items = ["item 1", "item 2", "item 3", "item 4"]; (veri tabanından gelen değerleri yansıtmak için yaoruma alındı)
let items;


// Load items
loadItems();

//Call Event Listener
eventLiteners();
function eventLiteners() {
    // submit event
    form.addEventListener("submit", addNewItem);

    // delete item event
    taskList.addEventListener("click", deleteItem);

    // delete all item event
    btnDeleteAll.addEventListener("click", deleteAllItems);
};

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        creatItem(item);
    })
};

// Get item from Local Storage
function getItemsFromLS() {
    if (localStorage.getItem("items") === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
}

// Set item to Local Storage
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}
// delete ıtem from LS
function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    })
    localStorage.setItem("items", JSON.stringify(items));
}


function creatItem(text) {
    //creat li
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    //creat a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);
    //add li to taskList (ul)
    taskList.appendChild(li);
    // console.log(li);
};



//Add new item 
function addNewItem(e) {
    if (input.value === "") {
        alert('add new item');
    }
    /*
    //creat li
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    //creat a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);
    //add li to taskList (ul)
    taskList.appendChild(li);
    // console.log(li);
    Bu kısmı creat item içerine aldım. orada daha pratik kullanmak için.
    */

    // creat item
    creatItem(input.value);

    // save to Local Storage
    setItemToLS(input.value);

    //Clear İnput
    input.value = "";
    e.preventDefault();
}

// Delete an item
function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("are you sure?")) {
            e.target.parentElement.parentElement.remove();

            // delete ıtem from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        };
    }
    e.preventDefault();
};

// Delete all items
function deleteAllItems(e) {
    // taskList.innerHTML = ""; (1. ve basit yöntem)
    if (confirm("are you sure?")) {

        /*  taskList.childNodes.forEach(function (item) {
              if (item.nodeType === 1) {
                  item.remove();
              }
  
          });  (bu kısım aynı işevi görmek üzere While döngüsü ile yazıldı) */

        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();
    }
    e.preventDefault();
};