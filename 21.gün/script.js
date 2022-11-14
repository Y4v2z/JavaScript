// Array in Es6
const boxes=document.querySelectorAll(".box");

// ES5
/*let boxesES5=Array.prototype.slice.call(boxes);
boxesES5.forEach(function(box) {
    box.style.background="green";
});*/

// console.log(boxesES5);

// ES6
// Array.from(boxes).forEach(box=>box.style.background="grey")
// console.log(boxes);

/*for (let i = 0; i < boxesES5.length; i++) {
    if(boxesES5[i].className=="box blue"){
        continue;
    } 
    boxesES5[i].textContent="i am changed";
    boxesES5[i].style.background="blue"
    
};*/
var boxesES6=Array.from(boxes);
// Normal for döngüsü ile aşağıda kullanılan for of döngüsü aynı anlama gelir
for(box of boxesES6){
    if(box.className=="box blue"){
        continue;
    }
    box.textContent="i am changed";
    box.style.background="blue";
}
// console.log(boxesES6);


// From Metotu
let arr=Array.from("Modern Jacascript");
// bu kullanım ile dizi oluşturulur.


/*const products=[
    {name: "Samsung S8", price:3000},
    {name: "Samsung S7", price:2000},
    {name: "Samsung S6", price:1000}
]
console.log(Array.from(products,prd=>prd.price));
console.log(Array.from(products,prd=>prd.name));

console.log(Array.from(products,prd=>prd.name=="Samsung S8"));

console.log(products.find(prd=>prd.name=="Samsung S8"));

console.log(products.filter(prd=>prd.name=="Samsung S7"));

console.log(products.findIndex(prd=>prd.price==2000));//1. indexteki elemanı bulur 
console.log(products.findIndex(prd=>prd.price==3000)); //0. indexteki elemanı bulur
console.log(products.findIndex(prd=>prd.price==5000));//-1 değeri yazdırarak böyle bir eleman olmadığını ifade eder. Yani dizi içinde herhangi bir değer var mı yok mu diye bu metot kullanılabilir.

let numbers=["a","b","c"];
let entries = numbers.entries();
for (let i of entries){
    console.log(i);
};

let keys = numbers.keys();
for (let i of keys){
    console.log(i);
};

let values = numbers.values();
for (let i of values){
    console.log(i);
};*/
// **********************************************


// Map Kullanımı(coolection key,value- pairs)

/*let val;

const numbers= new Map();
numbers.set(1,"one");
numbers.set("2","two");
numbers.set(3,"three");
numbers.set("four","four");

val=numbers;
val=numbers.get(1);
val=numbers.get("2");
val=numbers.size;
val=numbers.has(3)//True
val=numbers.has(4)//False
val=numbers.delete("four")
val=numbers.has("four");
// numbers.clear();
console.log(val);

for(var [key, value]of numbers){
    console.log(key + " = "+ value);
};

for(var [key, value]of numbers.entries()){
    console.log(key + " = "+ value);
};

for(var key of numbers.keys()){
    console.log(key);
};

for(var value of numbers.values()){
    console.log(value);
};

numbers.forEach(function(key, value){
    console.log(key + " - "+ value);
})


var first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);

var second = new Map([
    [4, "four"],
    [5, "five"]
]);

var merged=new Map([...first, ...second]);
console.log(merged);*/


// ****************************************************


// Set Kullanımı (collection -Unique value)

let val;
var mySet=new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);//aynı değeri tekrar eklemez.
mySet.add("two")
mySet.add({a:1,b:2})
var obj={a:1,b:2};
mySet.add(obj);
val=mySet.has(1);//true
val=mySet.has(3);//false
val=mySet.has(obj);
val=mySet.size;

mySet.delete(1)

console.log(val);
console.log(mySet);

for(let i of mySet){
    console.log(i);
}

for(let i of mySet.keys()){
    console.log(i);
}

for(let i of mySet.values()){
    console.log(i);
}
//Set metotu kullanımında key ve value aynı değeri yansıtır.

for([key,value] of mySet.entries()){
    console.log(key, value);
}// bu kullanımda da yine key ve value aynı değerleri temsil eder

console.log(Array.from(mySet));// myset i bu şeklide diziye çevirebiliriz.


let mySet2= new Set([1,2,3,4]);
console.log(mySet2);


// İntersect (kesişim)
// var intersect=new Set(Array.from(mySet).filter(x=>mySet2.has(x)));
var intersect=new Set([...mySet].filter(x=>mySet2.has(x))); //bir üst satır ile ynı kullanım.


console.log(intersect);



// Difference 
// var difference=new Set(Array.from(mySet).filter(x=>!mySet2.has(x)));
var difference=new Set([...mySet].filter(x=>!mySet2.has(x)));

console.log(difference);