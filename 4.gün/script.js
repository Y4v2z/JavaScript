// 4. Gün

// Strings
const firstName = "yavuz";
const lastName = "Avci";
const age = 31;
let hobbies = "sinema,spor,kitap,yazılım";
let val;



// Strings Concatenation
val = firstName + " " + lastName;
val = "Yavuz";
val += " Avci";
val = "benim adım " + firstName + " " + lastName + " yaşım " + age + " Darıca'da yaşıyorum";
// bu yöntemler ile string ifadeler beraber yazılır

// String concat
val = firstName.concat(" ", lastName)
// .contac methodu ile ikisi beraber yazılır.


// String uppercase-lowercase büyük küçük harfe çevirme yöntemi
val = val.toUpperCase();
val = val.toLowerCase();


// String Replace yer değiştirme
// val = val.replace("yavuz", "esra");


// Trim Methodu (bırakılan boşlukları geri alma)
val = " " + val.replace("yavuz", "esra") + " ";
val = val.trim();

// val = val[2]; console yazdırılan metindeki 3. karakteri getirir 0 dan başladığı için



// Substring-slice her ikisi de aynı işe yarar. konsola yazılan metin içinde belli kısımları seçebilirsin
// tek bir değer girersen o karakterden sonrası yazılır.

// val = val.substring(2, 5);
// val = val.slice(6);



// val = val.indexOf("a");
// val = val.indexOf("x"); 
// metinde olmayan harf yada kelime aratılırsa console -1 yazar


// String Lenght
// val = val.length;
// console ile yazdırılan metnin kaç karakter olduğunu hesaplar


// Split (dizi ifadelerini ayırma yöntemi)
val = hobbies.split(",")


console.log(val);
console.log(typeof val);

// ****************************************************


// Temple String
const fullName = "Yavuz Avci";
const city = "Kocaeli";
const yearOfBirth = 1991;

let value;
value = "My name is " + fullName + " I'am " + (2022 - yearOfBirth) + " years old and I live in " + city;
// bu ifade temole olarak şöyle de yazılabilr. `` bu işaret alt gr ile virgül e çift tıklayınca gelir.


// Ternary Operator
value = `My name is ${fullName} I'am ${2022 - yearOfBirth >= 18 ? 'over 18' : 'under 18'} and I live in ${city} `
// yaş 18 den büyükse yani cevap true ise ilk tırnak içini false ise ikinci tırnak içini yazar.
console.log(value);


console.clear();
// *************************************************


// Uygulama Zamanı (string)

var sentence = " Template Literals or template strings is the ability have multi-line strings without any funny business"
var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye "

// Cümle kaç karakterlidir?
console.log(sentence.length);


// Kaç kelimeden oluşuyor?

console.log(sentence.trim().split(" ").length);

// Tüm cümleyi küçük harfe çevirin
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// Cümlenin başındaki ve sonundaki boşlukları silin.

console.log(sentence.trim());

// '-' karakterini silin.
console.log(sentence.replace("-", ""));



// url nin içindeki http:// kısmını çıkarınız
var str = "http://";
console.log(url.slice(str.length));
console.log(url.substring(str.length));

// url hangi protocol ü kullanmaktadır? (http, https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, ".com ifadesini içeriyor mu?
console.log(url.indexOf(".com"));
console.log(url.includes(".com")); // .includes true yada false olarak yanıt verir



// url string ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLowerCase()
    .replace(/ /g, "-")
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")

);

