// Array

let names = ["yavuz", "esra", "hazel", "kadir"];
let years = [1991, 1993, 2022, 1995];
let mix = ["yavuz", "esra", 1995, null, undefined, ["futbol", "basketbol"]];

// get array items (diziden bir eleman seçmek)

console.log(names[3]); // 3. elemanı seçecektir.


// set array items (diziki bir elemana yeni değer verme)


names[0] = "hasan"; // (0. elemanı yani yavuz 'u hasan ile değiştir demek)

names[names.length] = "hasan";  // bu durumda da dizinin sonuna hasan'ı ekleyecek


// add item (push ile eleman ekleme)
years.unshift(1985); // bu duurmda dizinin en başına ekleyecek
years.push(1986);  // bu durumda dizinin sonuna ekleyecek


// remove item (pop ve shift ile eleman çıkarma)
years.shift(); // bu durumda dizinin başındaki eleman çıkacak
years.pop(); // bu durumda dizinin sonundan çıkaracak


// indexof methodu
let index = names.indexOf("hazel");
console.log("index:" + index);

// reverse (diziyi tersten dizme)
names.reverse();

// sort (alfatik  olarak sıralama yapar ())
years.sort();

// concate (dizileri birleştirme)
let val = names.concat(years);
console.log(val);


// splice (diziden eleman slip ekleme)
names.splice(2, 1, "seda"); // burada ifade edilen 2. indexten itibaren 1 eleman sil ve seda yı ekle
// names.splice(0, 2); burada ifade edilen ise sadece 0. indexten itibaren 2 eleman sil



// find

function over18(year) {
    let age = 2018 - year;
    return age >= 18;

}


// console.log(over18(2003)); bu işlem bize true yada false değerini verir 18 den büyükse true

// let value = years.find(over18);
// console.log(value); // bu işlem years içindeki tarihlerden 18 yaşından büyük çıkan ilk değeri çıkarır



// Filter

let value = years.filter(over18);
console.log(value); // bu işlem years dizisi içinde 18 yaşından büyük bütün tarihleri alır


console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);
console.clear();

// *******************************************

// uygulama zamanı

// "Bmw, Mercedes, Opel, Mazda" elemanlarına sahip bir dizi oluştur.

var arr = ["Bmw", "Mercedes", "Opel", "Mazda"];
// var arr2 = new Array("Bmw", "Mercedes", "Opel", "Mazda"); iki yöntem de kullanılabilir
console.log(arr);
// console.log(arr2);

// Bu dizi kaç elemanlıdır?

console.log(arr.length);

// Dizinin ilk ve son elemanı nedir?
console.log(arr[0]);
console.log(arr[3]);


// Renault değerini dizinin sonuna ekleyin
arr[4] = "Renault";
// arr.push("Renault");
// arr[arr.length] = "Fiat";
// console.log(arr);


// Toyota değerini dizinin başına ekleyin

arr.unshift("Toyota");
arr[0] = "Seat";
// console.log(arr);


// Seat ve değerini siliniz

arr.shift("seat");
// console.log(arr);

// Renault değerini siliniz

arr.pop("Renault");


// Dizi elemanlarını ters çeviriniz

// console.log(arr.reverse());
arr.reverse();



// Dizi elemanlarını alfabetik olarak sıralayınız
// console.log(arr.sort());
arr.sort();




// [1,2,5,80,15] dizisini sıralayın
var arr2 = [1, 2, 5, 80, 15];
arr2.sort();
console.log(arr2);
// console.log(arr2.sort());***bu şekilde yine alfabetik olarak sıralayacaktır. Sayısal olarak sıralamak için aşağı

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(arr2.sort(compare));


// "opel" değeri dizinin bir elemanı mıdır?
console.log(arr);
console.log(arr.indexOf("Opel"));
console.log(arr.includes("Opel"));


// var str=" chevrolet, dacia" ifadesini diziye çeviriniz

var str = "chevrolet,dacia"
var arr3 = str.split(",");
console.log(arr3);


// oluşturulan 2 dizinin elemanlarını birleştirin
// console.log(arr.concat(arr3)); 1. yöntem
var arr4 = arr.concat(arr3);
console.log(arr4);



// oluşturulan diziden son iki elemanı slin

// console.log(arr4.pop());
// console.log(arr4.pop());
// console.log(arr4); bu şekilde sondan tek tek de silinebilir ancak kolay yolu aşağıda

console.log(arr4.splice(4, 2));
console.log(arr4);




/*Aşağıda verilen elemanları bir dizi içerisinde sakalyınız
    studentA :Yiğit Bilgi 2010
    studentB :Sena Turan 1999
    srudenC :Ahmet Turan 1998


*/
var studentA = ["Yiğit", "Bilgi", 2010]
var studentB = ["Sena", "Turan", 1999]
var studentC = ["Ahmet", "Turan", 1998]
var students = [studentA, studentB, studentC];
console.log(students);
console.log(students[0]);



console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);