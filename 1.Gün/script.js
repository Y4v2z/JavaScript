// 1.gün


// alert("Merhaba Dünya");

/*console.log("merhaba");
console.log(1234);
console.log(true);
console.log([1, 2, 3]);
console.error("hata oluştu");
console.warn("bir uyarı oluştu");*/

// console.clear();


// Değişkenler
/*var age;
age = 20;
console.log(age);
var fullname = "Yavuz Avci";
console.log(fullname);
fullname = "esra avci";
console.log(fullname);*/

/* Değişken tanılama kuralları
1) Sayısal ifadeler ile başlayamaz
    2) kamut isimleri ile tanımlama yapılamaz. Ör let, vat, if 
    3)birden fazla kelimeden oluşacaksa birleşik yazılır yada ikinci kelime ya büyük harfle başlar yada _ alt tire ile
    4) büyü/küçük harf duyarlılığı vardır. değişkenin adı neyse tam olarak öyle yazılır */

/*var yas1
var ad = "yavuz";
var soyad = "avci";*/

//  bunun yerine aşağıaki gibi yazılır

/*var ad_soyad = "yavuz avci";
var adSoyad = "yavuz avci";

var firstname = "yavuz";
var Firstname = "kerem";*/

// ikisi birbirinden farklı ifadeler 

/* var city = "kacaeli";
var city = "ankara";
city = "istanbul";
console.log(city);*/

// üçünü de tanımlar yani var ile üçü de yazılır

/* let sehir = "kocaeli";
sehir = "ankara";
console.log(sehir);*/

// bu şekilde olur ancak let içinde başka değer tanımlanamaz. ör: let sehir=ankara olamaz

/*const email = "abc@gmail.com"
console.log(email);*/

// cont ile verilen değişken bir daha verilemez.

// ***************
// Değişken Tipleri (Primitive Types, Reference Types(objects)) 

// Primitive Types string, number, boolean, null, undefine


// string
let firstname = "yavuz";

// Number
let age = 20
let money = 100.5


// boolean )koşul durumlarında kullanılır)
let isActive = false

// Null (herhangi bir değer tanımlanmadığını ifade eder)
let job = null

// undefine
let car;
// console.log(typeof car);


// Reference Types (objects) Array, Object, Function

// Array
let names = ["ali", "ahmet", "can"]

// Object
let adress = {
    city: "kocaeli",
    country: "türkiye"
}

// Function
let calculateAge = function () {
    return 0;
}
console.log(typeof calculateAge);
