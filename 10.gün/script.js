// Document Object Model
// let val;
// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[2];
// val = document.head;
// val = document.body;
// val = document.anchors; //a etiketlerini seçme. (sayfada a etiketi yok)
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute("src");


// console.log(val);


// *******************************************************




// Selecting Elements

// ****Single Elements
// Tek bir eleman seçerken "document.getelementById() ve document.querySelector()" metodu kullanılır.
// let val;
// val = document.getElementById("header");
// val = document.getElementById("header").id;
// val = document.getElementById("header").className;

// val = document.getElementById("header");
// // // val = val.id;
// // val = val.className;
// // Her seferinde dokumentbyıd seçmeden de en son seçtiğimiz val üzerinden sçimlermize devam edebiliriz.
// val.style.fontSize = "45px";
// val.style.color = "red";
// val.style.fontWeight = "bold";
// // val.style.display = "none";
// document.getElementById("header").innerText = "my ToDo App";
// document.getElementById("header").innerText = "<b>my ToDo App</>";
// document.getElementById("header").innerHTML = "<b>my ToDo App</>";

// console.log(val);




// document.querySelector()
// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("div"));
// document.querySelector("li").style.color = "red";
// document.querySelector("li:last-child").style.color = "blue";
// document.querySelector("li:nth-child(2)").style.color = "yellow";
// document.querySelector("li:nth-child(3)").textContent = "task item";
// // document.querySelector("li").className = "item-primary";
// document.querySelector("li").classList.add("active");

// ***Multiple Elements

// *******className (document.getElementByClassName())
// let val;
// val = document.getElementsByClassName("list-group-item");
// // val = document.getElementsByClassName("list-group-item")[0];
// // val = document.getElementsByClassName("list-group-item")[3];
// // val = val[0];  // Val yukarıda tanımlandığı için şu şekilde de seçilebilir;
// val[1].style.color = "green";
// val[1].style.fontSize = "25px";
// val[3].textContent = "başlık";

// for (i = 0; i < val.length; i++) {
//     console.log(val[i].style.color = "red");
//     console.log(val[i].textContent = "New İtem");
// }



// *********Tag Name (document.getElementByTagName())
// val = document.getElementsByTagName("li");
// val = document.getElementsByTagName("a");
// val = document.getElementById("task-list");
// Aşağıdaki gibi yaparsak id si task list içinde olan a ları seçeriz
// val = val.getElementsByTagName("a");
// val = document.getElementById("task-list").getElementsByTagName("a");;





// ************Query Selector (document.querySelectorAll())

// val = document.querySelectorAll("li");

// val.forEach(function (item, index) {
//     console.log(item.textContent = `${index} - hello`);
// });


// val = document.querySelectorAll("li:nth-child(odd)");
// val.forEach(function (item) {
//     console.log(item.style.background = "yellow");

// });
// console.log(val);

// ***************************************************************


// Traversin the Dom (elementler üzerinde gezinme)
// let val;
// let list = document.querySelector(".list-group");
// val = list;
// val = list.childNodes;

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType; //text node
// val = list.childNodes[1].nodeType; //element


// val = list.children;
// val = list.children[0];
// val = list.children[2];
// val = list.children[2].textContent = ("new item");
// val = list.children[3].children;
// val = list.children[3].children[0];

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;
// val = list.parentNode;


// val = list.parentElement;
// val = list.parentElement.parentElement;


// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;

// val = list.children[1].previousSibling;
// val = list.children[1].previousElementSibling;

// console.log(val);

// // for (let i = 0; i < list.children.length; i++) {
// //     console.log(list.children[i]);
// // }

// // for (let i = 0; i < list.childNodes.length; i++) {
// //     console.log(list.childNodes[i]);
// // }

// for (let i = 0; i < list.childNodes.length; i++) {
//     if (list.childNodes[i].nodeType === 1)

//         console.log(list.childNodes[i]);
// }






