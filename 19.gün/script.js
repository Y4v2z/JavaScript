// Arrow Functions
let welcomeES5 = function () {
    console.log("Hello from Es5");
};
welcomeES5();

let welcomeES6 = () => {
    console.log("Hello from Es6");
}
welcomeES6();
// Arrow fonksiyonda süslü parantezlerin içi tek satır olacaksa şayet bu parantezler yazılmayabilir.
// Ancak dha fazla satır olacaksa yazılmak zorunlu.
let multiplicationEs5 = function (x, y) {
    return x * y;
}
console.log(multiplicationEs5(5, 10));

// let multiplicationEs6=(x,y)=>{
//     return x*y};

let multiplicationEs6 = (x, y) => x * y;
console.log(multiplicationEs6(5, 11));
// süslü parantezler kullanılmayacaksa şayet return de yazılmaz. 



// Split 
// Split metotu text alır ve belirttiğimiz şekilde geriye dizi döndürür.
let splitEs5 = function (text) {
    return text.split(" ");
};
console.log(splitEs5("modern javascript kursu"));

let splitEs6 = (text) => text.split(" ");
console.log(splitEs6("Modern Javascript Kursu"));




// Object literal ile geriye object döndürme
let getProductEs5 = function (id, name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProductEs5("1", "Samsung"));

let getProductEs6 = (id, name) => ({
    id: id,
    name: name
});
console.log(getProductEs6("2", "iphone"));




// Map metotu kullanımı
const phones = [
    { name: "Iphone7", price: "5000" },
    { name: "Iphone8", price: "6000" },
    { name: "Iphone9", price: "7000" },
    { name: "Iphone10", price: "8000" }
];
 let priceEs5=phones.map(function(phone){
    return phone.price;
 });
 console.log(priceEs5);
 
//  const priceEs6=phones.map(phone=>phone.price);
 const priceEs6=phones.map(phone=>{
    return phone.price
 })
//  const priceEs6=phones.map(phone=>{return phone.price});
 console.log(priceEs6);
 

//  Fiter metotu kullanımı
 const arr=[1,2,3,6,10,20,30,45,50,52,57,92,95];
 let evenEs5=arr.filter(function(a){
    return a%2==0;
 });
 console.log(evenEs5);

 let evenEs6=arr.filter(a=>a%2==0);
//  let evenEs6=arr.filter(a=>{return a%2==0});
 console.log(evenEs6);

//  ******************************************************************



// This Keyword



// ES5
// let list={
//     category: "phone",
//     names: ["iphone8","samsungS8","xiaomi"],
//     call:function(){
//         var self=this;
//         this.names.map(function(name){
//             console.log(`${self.category} ${name}`);
//         })
//     }
// }

// Es6
let list={
    category: "phone",
    names: ["iphone8","samsungS8","xiaomi"],
    call:function(){
        this.names.map((name)=>{
            console.log(`${this.category} ${name}`);
        })
    }
}
list.call();


// Es5
// function Game(){
//     this.live=0;
//     this.addlive=function(){
//         var self=this;
//         this.oneup=setInterval(function(){
//             console.log(++self.live);
//         },1000)
//     }
// };
function Game(){
    this.live=0;
    this.addlive=function(){
        this.oneup=setInterval(()=>{
            console.log(++this.live);
        },1000)
    }
};
let player=new Game();
// player.addlive();

// ********************************************
// Spread Operator
function getTotal(a,b,c,d){
    return a+b+c+d;
}
console.log(getTotal(10,20,30,40));

let numbers=[10,20,30,40];
// ES5
console.log(getTotal.apply(null,numbers));
// console.log(getTotal.apply(numbers,numbers));
 
// ES6
console.log(getTotal(...numbers));

let arr1=["two","three"];
let arr2=["one","four","five"];
let arr3=["one", ...arr1,"four","five"]
// arr1.push(...arr2);
// arr1.unshift(...arr2);
console.log(arr1);


let h1=document.querySelector("h1");
let divs=document.querySelectorAll("div");


let tags=[h1, ...divs];
console.log(tags);

tags.forEach(tag=>tag.style.color="red");
// tags.forEach(function(tag){
//     return tag.style.color="blue"
// });
// tags.forEach((tag)=>{
//     tag.style.color="yellow"
// })
// tags.forEach(tag=>{
//     return tag.style.color="red"
// });
// yukarıda yaptığım haliyle farklı farklı yazılabilir.

console.log(tags);