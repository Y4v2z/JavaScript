//  DATE OBJECT (object bir değişkenin bize sağladığı faydaları)


let d = new Date();
let birthday = new Date(1990, 1, 12)

// Set Methods
d.setDate(8);
d.setFullYear(2010);
d.setMonth(5);



// Get Methods
/*console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours())
console.log(d.getMonth())
console.log(d.getSeconds())


console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);*/
// *************


// Şimdiki tarihin gün ay ve yıl bilgilerini yazdırın
var dt = new Date();
console.log(dt);
console.log(dt.getDate());
console.log(dt.getMonth() + 1);
console.log(dt.getFullYear());
// Tarih ve saat bilgisini içeren bir date objesi oluşturun
var dtA = new Date("8/24/2010 14:50:10");
console.log(dtA);

var dtB = new Date(2010, 7, 24, 14, 50, 10);
console.log(dtB);

// 1.1.1990 tarihinden bir gün öncesini gösterin
var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);

console.log(dtC);



// iki tarih arasında geçen zamanı bulun
var start = new Date("1/1/1990");
var end = new Date("1/1/1992");
var miliseconds = end - start;
seconds = miliseconds / 1000;
minutes = seconds / 60;
hours = minutes / 60;
day = hours / 24

console.log("milisconds:" + miliseconds);
console.log("seconds:" + seconds);
console.log("minutes:" + minutes);
console.log("hours:" + hours);
console.log("day:" + day);

// Her yıl Mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır
var annelerGünü = new Date();
annelerGünü.setHours(0, 0, 0, 0);
annelerGünü.setFullYear(2019);
annelerGünü.setDate(1);
annelerGünü.setMonth(4);

while (annelerGünü.getDay() != 0) {
    annelerGünü.setDate(annelerGünü.getDate() + 1)
}
annelerGünü.setDate(annelerGünü.getDate() + 7);
console.log(annelerGünü);

// Yaş hesaplamaları nasıl yapılır
var bithday = new Date("8/1/1985");
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);

// console.log(birthday.getTime()); .getTime() miliseconds cinsinden değer çıkarır.
// console.log(Date.now()); Date.now() şimdiki tarihin miliseconds cinsinden değerini çıkatır.


// *******************


// Numbers
let val;
// val = Number("10");
// val = parseInt("10");
// val = parseFloat("10.5");
// val = parseInt("10a");

// val = isNaN("a10");
// val = isNaN("10"); girilen değerin "10" sayı olup olmadığını öğrenmek için kullanabiliriz.

var num = 10.123456789;
val = num.toPrecision(5);
val = num.toFixed(3);

// "toPrecision" baştan itibaren sayar ve 5 basamak göterir
// "toFixed" virgülden sonra sayar ve virgülden sonra 3 basamak gösterir.

val = Math.PI;
// pi burda bir object tir ve parantez içinde yazılmaz.
val = Math.round(2.8)
// .math.round ile verilen sayı en yakın tam sayıya yuvarlanır. 2,8 -> 3'e  2,1 -> 2'ye tuvarlanır.
val = Math.ceil(2.4)
val = Math.ceil(2.7)
// Math.ceil her zaman sayıyı yukarıya yuvarlar. 2.4 ve 2.7 3 olarak yazılır.
val = Math.floor(2.4)
val = Math.floor(2.7)
// Math.floor sayıyı her zaman aşağıya yuvarlar 2.4 ve 2.7 2 olarak yazılır.
val = Math.sqrt(64);
// math.sqrt sayının karekökünü alır square root
val = Math.pow(2, 5);
// math.pow sayının üssünü alır
val = Math.abs(-100);
// math. sayının Mutlak Değerini alır
val = Math.min(1, 2, 3, 4, 9)
// en küçük sayıyı verir
val = Math.max(1, 2, 3, 4, 9)
// en büyük sayıyı verir
val = Math.random() * 10;
// her yenilemede 0 ve 1 arasında rastgele sayı verir. *+-/ işaretleri ile işlem yaptırılabilir.
val = Math.floor(Math.random() * 10);

console.log(val);
console.log(typeof val);
// ******************


// Uygulama Zamanı
var num = 15.123456789;

// Toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3));

// Ondalık kısmı 3 basamakta sınırla
console.log(num.toFixed(3));
// en yakın sayıya yuvarla
console.log(Math.round(num));

// aşağı yuvarla
console.log(Math.floor(num));
// yukarı yuvarla
console.log(Math.ceil(num));

// 1,2,10,56,20,sayılarından en büyüğünü ve en küçüğünü bul
console.log(Math.max(1, 2, 10, 56, 20));
console.log(Math.min(1, 2, 10, 56, 20));

// sayı aralığını, kullanıcısının belirleyeceği rastgele bir sayı üret
var min = 50;
var max = 100;


console.log(Math.floor(min + Math.random() * (max - min)));


/* Bir personelin yaptığı mesaiye göre aldığı maaşı hespalayalım.
**Brüt maaş :3700 TL
**Brüt Mesai :10.3 TL
Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/
var brutMaas = 3700;
var mesaıucreti = 10.3;
var mesaıSuresi = 42;
var toplamBrutMaas = brutMaas + (mesaıucreti * mesaıSuresi);
var toplamNetMaas = toplamBrutMaas - (toplamBrutMaas * 0.25);

console.log(toplamBrutMaas, toplamNetMaas.toFixed(2));
