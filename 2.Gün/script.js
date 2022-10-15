// Tür Dönüşümü

/*let num1 = "5";
let num2 = "10";
console.log(num1 + num2);
console.log(typeof num1);*/

// bu şekilde console string, eğer number metodu içinde yazılırsa "number" oluyor. 


/*let num1 = Number("5");

let num2 = Number("10");
let total = num1 + num2
console.log(total);
console.log(num1 + num2);
console.log(typeof num1);*/

// from number to string
let val;
val = String(10)

// boolaen to string
val = String(true)


// date to string

val = String(new Date());


// array to string
val = String([1, 2, 3, 4])

// toString() şeklinde de kullanılır daha basit
val = (10).toString
val = (true).toString

// string to number
val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("ali")
val = Number([1, 2, 3])
// ali ve dizi ifadesini ifadesini kullandığın an "NaN" not a number ifadesi console da yazar.

// number e çevirmenein diğer yolu da parseInt ve parseFloat metodudur.
val = parseInt("10");
val = parseInt("10.5");
// ondalıklı şelilde sayı varsa tam sayıya yuvarlanarak ör:10 yazar. ondalıklı yazdırmak için "parseFloat" kullanılır
val = parseFloat("10.5")


/*console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));*/


// bir müşterinin bilgileri için değişken oluşturma

var costumerName = "yavuz";
var costumerLastName = "avci";
var costumerFullName = "yavuz avci";
var costumerId = "12345678912"
var total = 205.5;
var gender = false; //true:erkek yani1, false:kadın yani 0 bu şekilde yapmak daha sağlıklı
// object
var adress = {
    city: "kocaeli",
    district: "izmit",
    body: "ömerağa mah. no:45"
}
// array
var hobbies = (["sinema", "kitap", "spor"])

// aşağıdaki bilgilere göre sipariş toplamını hesaplayınız
var order1 = Number("100");
var order2 = Number("150");
var totalOrder = order1 + order2

// console.log(totalOrder);

// aşağıdaki bilgilere göre sipariş toplamını hesaplayınız
var order3 = Number("100.2")
var order4 = Number("150.5")
var totalOrder2 = order3 + order4
// console.log(totalOrder2);

// aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız

var order4 = parseInt("100.2")
var order5 = parseInt("150.5")
var totalOrder3 = order4 + order5
// console.log(totalOrder3);


// Aşağıda verilen doğum yılına göre yaş hesaplayınız

/*var yearOfBirdh = 1986;
console.log(new Date().getFullYear() - yearOfBirdh);*/


// aşağıdaki string ifadenin karakter sayısını hesaplayınız

/*var course = "modern javascript kursu";
console.log(course.length);*/

// **********************


// Operatörler
let value;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

// 1 Aritmetik Operatörler
value = a + b;
value = a - b;
value = a * b;
value = a / b;
value = a % b;
// value = d++
// value = d++
value = d--;
value = --d;

// 2 Atama Operatörleri

value = a;
value += a; //val= val+a;
value -= a; //val= val+a;
value *= a; //val= val+a;
value /= a; //val= val+a;
value %= a; //val= val+a;


// 3 Karşılarştırma Operatörleri
value = a == b;
value = a == c;
value = b === c; // hem değer kontrolü hemde type kontrolü yapar.(string,number)
value = 5 === "5";
value = a != b; // a b'ye eşit değil? şeklinde sorudur.
value = a !== b;
value = a > b;
value = a < b;
value = a <= b;
value = a >= b;
value = 5 >= 5;

// 4 Mantıksal Operatörler

// && (And (ve)) Operatörü

// sonucun true olması için her iki tarafta true olmalı
// true && true =true
// true && false =false
// false && false =false

value = (a > b) && (a > c)

// || (Or (veya)) Operatörü
value = (a < b) || (a < c)

// sonucun false olması için her iki tarafında false olması lazım
// true && true =true
// true && false =true
// false && false =false


// ! (Not) operatörü (değilini olmak)
value = !(a > b)

// !true=false
// !false=true


console.log(value);

console.log(typeof value);




// Demo: Operatör

/*1- Can ve Ada'nın boy ve kg bilgilerini alın.
2- Alınan bilgilere göre ücut ındexlerini hesaplayın.
3- Hesaplanan index bilgisine göre karşılaştırma yapın.
4- Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

    0-18,4: zayıf
    18,5-24,9: normal
    25-29,9: kilolu
    30-34,9: obez*/


let indexCan;
let indexAda;

const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

indexAda = (kgAda) / (heightAda * heightAda);
indexCan = (kgCan) / (heightCan * heightCan);

console.log(indexAda.toFixed(), indexCan.toFixed(2));

let adaHeigherIndex = indexAda > indexCan;
console.log("adanın indeksi canın indeksinden büyük?" + adaHeigherIndex);
let canHeigherIndex = indexCan > indexAda;
console.log("canın indexi ada dan büyük mü?" + canHeigherIndex);



let AdaZayif = (indexAda >= 0) && (indexAda < 18.4);
let AdaNormal = (indexAda >= 18.5) && (indexAda < 24.9);
let AdaKilolu = (indexAda >= 25) && (indexAda < 29.9);
let AdaObez = (indexAda >= 30) && (indexAda < 34.9);


console.log("ada zayıf" + AdaZayif);
console.log("ada normal" + AdaNormal);
console.log("ada kilolu" + AdaKilolu);
console.log("ada obez" + AdaObez);