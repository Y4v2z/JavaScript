// Window Object (global tanımlayıcı)
var val;
var a = 10;
function abc() {
    return 0;
}
val = window;
// Alert
// alert("merhaba");

// prompt
// var val = prompt("bir sayı giriniz");



// val = confirm("emin misiniz");

// if (val) {
//     console.log("ok");
// } else {
//     console.log("no");
// }

// window.alert, window.confirm .... gibi yazılabilirde yazılmayabilir.

// val = window.scrollX;
// val = window.scrollY;


// location

// val = window.location;
// val = window.location.href;
// val = window.location.hostname;
// val = window.location.host;
// val = window.location.protocol;
// val = window.location.search;
// window.location.href = "http://google.com"   bu sayfaya yönlendirir

// window.location.reload;  sayfayı sürekli olarak yeniler
// window.navigator;


// console.log(val);


// ***********************************





// Scope  (yazdığımız bir değişkenin hangi kod parçasıyla erişilebir olduğunu gösterir (kapsam))


// ** Global Scopes


var name = "yavuz";
function logName() {
    console.log(name);
}  // bu haliyle global değişken olan "yavuz"u konsola yazdı ancak fonksiyonun içinde bir name tanımlanırsa consola onu yazacaktır.

/*function logName() {
    var name = "esra";
    console.log(name);
}
Fonksiyonlar kendi scopes larını oluşturur. yani fonksiyon içinde tanımlanan değişken sadece o fonksiyona özgüdür.
*/

/*if (true) {
    console.log(name);
}*/


/*var age = 25;
function logName() {
    var name = "esra";
    var age = 12;
    console.log("function scope", name, age);
}
console.log(age); */

// console.log(age); age fonksiyonun içinde tanımlandığı için sadece fonksiyona özel ve dışarıdan erişilemez.
// diğer taraftan  fonksiyonun içindeki konsol age 12 yi yazdırırken dışındaki 25 yazdırıyor. bu durum if bloğunda farklı
var age = 25;
if (true) {
    // let age = 30;
    // const age=30
    var age = 30
    console.log("block scope", name, age);
}
// if bloğunda da önce blok içi yazılır. ancak ilginç olan age değişkenini blok dışında da yazdırdığında yaşı 30 yazmaktadır. 
// ancak if bloğu içinde sadece "var" ile tanımlanan değişkenler için geçerlidir.  bu husus fonksiyondan farklıdır. fonksiyonda hiçbir şeilde fonksiyon içindeki değişkene dışarıdan erişilemez.
console.log(age);
logName();
console.log(name);



// ** Local Scopes

// Fonksiyonlar kendi scopes larını oluşturur. yani fonksiyon içinde tanımlanan değişken sadece o fonksiyona özgüdür. Dışarıdan erişlemez anacak fonksiyon dışarıya erişir.
// Block lar (if,Switch) yeni scope oluşturmaz. yani block içinde const ve let hariç olmak üzere var ile tanımlanan değişkene dışarıdan erişilebildiği için scope oluşturmaz.


// Ör;
if (true) {
    var model = "opel";
    let year = 2016;
    const color = "white";
    console.log("block scope", model, year, color);
}
console.log(model); //sadece model (var ile tanımlandığı için konsola yazar diğerleri yazmıyor. )
// console.log(year);
// console.log(color);

var i = 1;
for (var i = 0; i < 10; i++) {
    console.log("i", i);

}
console.log(i);
// for döngüsünün içinde "var" kullanırsak döngü dışında console.log i yi 10 olarak yazmaktadır.
// bunun önüne geçmek yani global olarak tanımlanan bir değeri değiştirmemek için döngü içinde "let" yada "const" kullanmalıyız.
// döngü içinde let kullandığımızda döngü dışında ki console.log i yi 1 olarak yazacaktır.

var i = 1;
for (let i = 0; i < 10; i++) {
    console.log("i", i);

}
console.log(i);

// Sonuç olarak function dışarıdaki değeri fonksiyon içinde, fonksiyon dışında global olarak tanımlanan değeri kullanır.
// Ancak fonksiyon dışında yazılacak olan console.log da global tanımlanan değeri hiçbir türlü değiştirmez. dolayısı ile "var, let, yada const" kullanılmasında sakınca yoktur.
// diğer taraftan "if,switch ve for" da blok içinde "var" kullanılırsa blok dışını etkiler ve glabal değişkeni dışarıda, blok içinde tanımlanan değeri ile değiştirir.
// Ancak bu durum "let ve const" için geçerli olmadığı için let ve const u kullanmak daha mantıklıdır. 