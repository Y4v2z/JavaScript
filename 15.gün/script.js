// Object Create
/*let personProto={
    calculateAge : function(){
        return 2022 - this.yearOfBirth
    }
}
let yigit=Object.create(personProto);
yigit.name="yigit";
yigit.yearOfBirth=2010;
yigit.job="student";

let emel=Object.create(personProto, {
    name:{value:"emel"},
    yearOfBirth:{value:1989},
    job:{value:"teacher"}
});*/

// console.log(emel);
// console.log(emel.calculateAge());
// console.log(yigit.calculateAge());




// Prototypal İnheritance

let person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
person.prototype.calculateAge = function () {
    return 2022 - this.yearOfBirth;
}
let teacher = function (name, yearOfBirth, job, subject) {
    person.call(this, name, yearOfBirth, job);
    this.subject = subject;
}

// Inherit the Person prototype methods

teacher.prototype = Object.create(person.prototype);

// Set Teacher Constructor
teacher.prototype.constructor = teacher;

teacher.prototype.greeting = function () {
    return "hello my name is " + this.name
}
// console.log(teacher.prototype.constructor);


let emel = new teacher("emel", 1989, "teacher", "math");
// console.log(emel);
// console.log(emel.calculateAge());
// console.log(emel.greeting());



// String
var str1 = "yavuz";
var str2 = new String("yavuz");

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);
if (str2 === "yavuz") {
    console.log("yes");
} else {
    console.log("no");
}

String.prototype.again=function(n){
    return new Array(n*3).join(this);
}
console.log("yavuz ".again(3));
//"again isimli fonksiyon tanımlayıp prototype ekleyebiliriz." 


// Number

var num1=10;
var num2=new Number(10);

// Boolean

var bool1=true;
var bool2=new Boolean(true);

// Object

var obj1= {
    name:"yavuz"
}

var obj2=new Object({
    name:"yavuz"
});

//  Array
var arr1=["ada", "yigit","cınar"];
var arr2= new Array("ada", "yigit","cınar");
Array.prototype.delete=Array.prototype.delete || function(member){
    var index=this.indexOf(member);
    if (index>-1) {
        this.splice(index,1)
    }
    return this;
}
console.log(arr1.delete("ada"));