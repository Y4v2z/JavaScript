// Creating Elements

// Creat Element

// const li = document.createElement("li");

// // add class
// li.className = "list-group-item list-group-item-secondary";
// // li.id = "yavuz";

// // add attribure
// li.setAttribute("title", "new item");
// li.setAttribute("data-id", "5");


// // add text node
// const text = document.createTextNode("new item");
// li.appendChild(text);

// // add elements
// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fas fa - times"></i>';

// // append a to li
// li.appendChild(a);

// // apend li to ul
// document.querySelector("#task-list").appendChild(li);

// console.log(li);

/*const li = document.createElement("li");
li.className = "list-group-item list-group-item-secondary";
const text = document.createTextNode("New İtem");
li.appendChild(text);
const a = document.createElement("a");
a.className = "delete-item float-right";
a.setAttribute("title", "New İtem");
a.setAttribute("href", "#");
a.setAttribute("data-id", "5");
a.innerHTML = '<i class="fas fa-times"></i>';
li.appendChild(a);
document.querySelector("#task-list").appendChild(li);
// document.getElementById("task-list").appendChild(li);
console.log(li);*/





// ******;*********************************************************



// */ Removing & Changing Nodes (herhangi bir etiketi silme ve değiştirme)


// ****Remove Element
// const taskList = document.querySelector("#task-list");


// taskList.remove(); (Seçtiğimiz kısım tamemen silinir.)
// taskList.childNodes[1].remove(); (seçtiğimiz chilnodes lar arasından birinci elementi silebiliriz.)
// taskList.children[3].remove(); (children sadece elementleri getiriyordu. 3. element silinir)
// taskList.removeChild(taskList.children[0]); (remove child metodu ile de seçim yapıp silebiliriz.)
// taskList.removeChild(taskList.childNodes[3]);


//**** Remove Attibute

// taskList.children[1].removeAttribute("class");
// for (let i = 0; i < taskList.children.length; i++) {
//     taskList.children[i].removeAttribute("class");

// }

// console.log(taskList);






// ******Replacing Element (herhangi bir elementin yerini değiştirme)
// const cardHeader = document.querySelector(".card-header");

// // Creat Element
// const h2 = document.createElement("h2");
// // h2.className = "card-header" //(class bu şekilde de oluşturulabilir, aşağıdaki gibide)
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);


// console.log(cardHeader);





// *****Classes
const taskList = document.querySelector("#task-list");
let val;
link = taskList.children[0].children[0];
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList[1];
link.classList.add("new");
link.classList.remove("new");

// Attribures
val = link.getAttribute("data-id");
val = link.getAttribute("href");
val = link.setAttribute("href", "http://yavuzavci.com");
val = link.hasAttribute("href"); //href isimli ettribute var mı diye sorar. console true/false olarak cevap verir)

console.log(val);