// Person Constructor

/*function person(name){
    this.name=name;
}*/

let person = function (name) {
    this.name = name;
};
person.prototype.introduce = function () {
    // return "Hello my name is "+this.name;
    console.log("Hello my name is " + this.name);
};
let p1 = new person("esra");
console.log(p1.name);
console.log(p1.introduce());
p1.introduce();
console.log("*********************");

// Teacher Constructor 

/*function teacher(name,branch){
    person.call(this,name);
    this.branch=branch;
}*/

let teacher = function (name, branch) {
    person.call(this, name);
    this.branch = branch
}
teacher.prototype = Object.create(person.prototype);
teacher.prototype.constructor = teacher;
teacher.prototype.teach = function () {
    // return "i'am teaching "+this.branch;
    console.log("i'am teaching " + this.branch);
};

let t1 = new teacher("fatma", "English");
t1.teach();
t1.introduce();
console.log(t1.branch);
console.log("************************");


// Constructor Student
/*function student(name, number){
    person.call(this, name);
    this.number=number;
}*/

let student = function (name, number) {
    person.call(this, name);
    this.number = number;
}
student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;
student.prototype.study = function () {
    // return "My school number is "+this.number;
    console.log(`My school number is ${this.number}`);
}

let s1 = new student("tugba", 64);
console.log(s1.number);
s1.introduce();
s1.study();
console.log("***********************");

/*function headMaster(name, branch, task){
    teacher.call(this, name, branch);
    this.task=task;
}*/

let headMaster = function (name, branch, task) {
    teacher.call(this, name, branch);
    this.task = task;
}
headMaster.prototype = Object.create(teacher.prototype);
headMaster.prototype.constructor = headMaster;
headMaster.prototype.description = function () {
    // return "My name is "+ this.name + " i am teaching "+  this.branch +  " and i am working at this school at "+ this.task;
    console.log(`My name is ${this.name}, i'am teaching ${this.branch} and i'am working at this school at ${this.task} `);
}

let h1 = new headMaster("yavuz", "math", "executive");
console.log(h1);
h1.introduce();
h1.teach();
h1.description();


// **********************************************************************

var a = 10;
var b = a;
console.log(a);
console.log(b);


var obj1={
    name:"ada",
    age:10,
}
var obj2=obj1;
obj1.age=12;

console.log(obj1.age);
console.log(obj2.age);

var num=50;
var account={
    name:"yavuz",
    accountNumber:12345,
};
console.log(num);
console.log(account);
console.log(account.accountNumber);

function update(a,b){
    a=100;
    b.accountNumber=111111;
};
update(num, account);
console.log(num);
console.log(account.accountNumber);
// Console num değerini güncellemeden yine 50 yazıyor. Çünkü primitive tipler Ram içinde farklı alanlara kayıt edilir.
// Bu yüzden bu güncellmeler birbirini etkilemez.
// Ancak Object türündeki değerlerin sadece adres kısmı RAM e kaydedilir. Dolayısıyla account number değeri güncellendi. 

