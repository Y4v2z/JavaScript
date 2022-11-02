let val;
let num = 10;
// Object Literal
/*let yigit={
    name:"yigit",
    yearOfBirth:2010,
    job:"student",
}*/
// Array
let numbers = [10, 20, 30];

val = num;
// val=yigit;
val = numbers;
// console.log(val);


// Function Constractor

/*function person(name, yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge=function(){
        return 2022-this.yearOfBirth;
    }
}*/

/*let person= function(name, yearOfBirth, job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge=function(){
        return 2022-this.yearOfBirth;
    }
}




let yigit=new person("yigit", 2010, "student");
let emel= new person("emel", 1989, "teacher");
console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());
console.log("**************************");
console.log(emel.name);
console.log(emel.yearOfBirth);
console.log(emel.job);
console.log(emel.calculateAge());*/
// ********************************************************************


// Prototype

let person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
person.prototype.calculateAge = function () {
    return 2022 - this.yearOfBirth;
};
person.prototype.getName = function () {
    return this.name;
};
person.prototype.lastName = "Turan";


let emel = new person("emel", 1989, "teacher");
let yigit = new person("yigit", 2010, "student");

console.log(emel);
console.log(emel.calculateAge());
console.log(emel.getName());
console.log(emel.lastName);
console.log(emel.hasOwnProperty("name")); // console true yazar çünkü name emel'in propertsi
console.log(emel.hasOwnProperty("lastName")); //console false yazar çünkü lastName person ın propertisi 

console.log("******************************");

console.log(yigit);
console.log(yigit.calculateAge());
console.log(yigit.getName());
console.log(yigit.lastName);
console.log(yigit.hasOwnProperty("name")); //true
console.log(yigit.hasOwnProperty("lastName"));//false


// *******************************************
// Uygulama Zamanı


/*
** Dışarıdan name ve salary bilgilerini alan employee Constractor tanımlayınız.
** Yıl içinde o ana kadar alınan toplam maaş ve alınıan vergi tutarını hesaplayan
fonksiyonu oluşturun.

    Vergi Dilimleri
        **20.000'e kadar %20 vergi,
        **30.000'e kadar %25 vergi,
        **30.000'den sonra %27 vergi,
*/

/*let employee=function(firstName, salary){
    this.firstName=firstName;
    this.salary=salary;
};*/
function employee(firstName, salary) {
    if (!(this instanceof employee)) {
        return new employee(firstName, salary);
    }
    this.firstName = firstName;
    this.salary = salary;
};
employee.prototype.calculateSalary = function () {
    var month = new Date().getMonth() + 1;
    var tax = 0;
    var totalSalary = this.salary * month;
    if (totalSalary <= 20000) {
        tax = totalSalary * 0.2;
    } else if (totalSalary > 20000 && totalSalary <= 30000) {
        tax = totalSalary * 0.25;
    } else {
        tax = totalSalary * 0.3;
    }
    return {
        tax: tax,
        netSalary: totalSalary - tax,
    }
};

let emp1 = employee("yigit", 2000);
let emp1_salary=emp1.calculateSalary();
console.log(`${emp1.firstName} isimli personel ${emp1_salary.tax} Tl vergi kesintisi ile ${emp1_salary.netSalary} TL maaş almıştır.`);


let emp2 = new employee("can", 4000);
console.log(emp2.calculateSalary());


