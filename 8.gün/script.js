// Functions
function yasHesapla(dogumYili) {
    return 2022 - dogumYili;
}
let ageYavuz = yasHesapla(1991);
let ageEsra = yasHesapla(1993);
let ageKadir = yasHesapla(1995);
console.log(ageKadir);
console.log(ageYavuz);
console.log(ageEsra);


function emekliligeKacYilKaldı(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;
    if (emeklilik > 0) {
        console.log(`${isim} Emekli olmana ${emeklilik} yıl kaldı`);
    } else
        console.log("Zaten emekli oldunuz");
}
emekliligeKacYilKaldı(1991, "Yavuz");
emekliligeKacYilKaldı(1993, "Esra");
emekliligeKacYilKaldı(1995, "Kadir");



// Function Declaration
// function sum(a, b) {
//     var c = a + b;
//     return c;
// }
// console.log(sum(10, 20));




// Function Expression
// const sum = function (a, b) {
// var c = a + b;
// return c;
// }
// bu kullanımı daha yaygın***
// console.log(sum(20, 30));
// console.log(sum(20)); // NaN nat a number olur.
// console.log(sum(20, 30, 40, 50)); // 30 dan sonraki 40 ve 50 yi dikkate almadan fonksiyon çalışır.


// sonucun Nan gelmesini istemiyorsak;
/*const sum = function (a, b) {
    if (typeof a === "undefined") {a = 0; }
    if (typeof b === "undefined") {b = 0; }
    var c = a + b;
    return c;
}
console.log(sum(30));*/
// buna varsayılan parametre ataması denir. bu durumda b yerine 0 yazdı ve sonucu 30 buldu


// ES6 default Parametres (ES6 ile gelen özelliğe göre);
const sum = function (a = 0, b = 0) {
    var c = a + b;
    return c;
}
console.log(sum(30));
// fonksiyon içinde a ve b ye 0 değeri verilirse sonradan verilen değer 0 ı ezerek işlem yapılacak
// diyelim a veya b yerine değer verilmedi bu durumda değer verilmeyen 0 mış gibi işleme girecek ve
// sonuçta NaN hiçbir zman gelmeyecek



// Arguments Kullanımı
function sumAll() {
    var total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(10, 20, 30, 40, 20));

// ****************************************

console.clear();


// Uygulama Zamanı

var hesapA = {
    ad: "Yavuz Avci",
    hesapNo: "12345678",
    bakiye: 2000,
    ekHesap: 1000
}

var hesapB = {
    ad: "Esra Avci",
    hesapNo: "123479",
    bakiye: 3000,
    ekHesap: 2000
}
function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`);
    if (hesap.bakiye >= miktar) {
        console.log("Paranızı alabilirsiniz");
        hesap.bakiye = hesap.bakiye - miktar;
    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;
        if (toplam >= miktar) {
            if (confirm("Ek Hesabınızı Kullanmak İster miziniz?")) {
                console.log("Paranızı alabilirsiniz");
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
                // hesap.ekHesap = hesap.ekHesap - (miktar - hesap.bakiye);
            } else {
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır`);
            }
        } else {
            console.log("Üzgünüz bakiye yetersiz.");
        }
    }
}
paraCek(hesapA, 1500);
paraCek(hesapA, 1500);
// paraCek(hesapA, 1500);
// paraCek(hesapA, 2000);
// paraCek(hesapB, 2000);