// İf/Else Statement


const firstName = "Sena";
const age = 19;
const isStudent = false;
const school = "univetsity";

/*if (firstName === "Sena") {
    console.log("merhaba sena");
}
if (age === 19) {
    console.log("yaşınız 19");
}*/

/*if (isStudent ===true) {
    console.log("merhaba öğrenci");
}

if (isStudent) {
    console.log("merhaba öğrenci");
isStudent boolean türünde bir değer olduğu için true yazılmasa bile true yatınıtını alıp "merhaba öğrenci yazdıracak"*/

// şayet sorunun yanıtı false ise (yukarıdaki true değereri false yapıldı)

/*if (isStudent) {
    console.log("merhaba öğrenci");
}
else {
    console.log("merhaba işler nasıl");

}*/
// sonuç false olunca else kullanıldı.



/*if (age >= 18) {
    if ((school == "university") || (school == "high school")) {
        console.log("ehliyet alabilirsiniz");

    } else {
        console.log("eğitim durumunuz yetersiz");
    }

} else {
    console.log("ehliyet alamazsınız");
} */

/*if (age > 0 && age < 12) {
    console.log(`${firstName}  is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager`);
} else {
    console.log(`${firstName}is a adult`);
}*/




// Undefined Kontrol

/*let id = "1234";
if (typeof id !== "undefined") {
    console.log("id: " + id)
} else {
    console.log("no id");
}*/

// *******************************************

// SWİTCH Statement


let category = "bilgisayar"
// let category = "beyaz eşya" dersen yanlışkategori yazdırır.

switch (category) {
    case "telefon":
        console.log("telefon kategorisi");
        break;
    case "bilgisayar":
        console.log("bilgisayar kategorisi");
        break;
    default:
        console.log("yanlış kategori");
}


let day;
switch (new Date().getDay()) {
    case 0:
        day = "pazar";
        break;
    case 1:
        day = "pazartesi";
        break;
    case 2:
        day = "salı";
        break;
    case 3:
        day = "çarşamba";
        break;
    case 4:
        day = "perşembe";
        break;
    case 5:
        day = "cuma";
        break;
    case 6:
        day = "cumartesi";
        break;
}
console.log(`Bugün günlerden ${day}`);


switch (new Date().getDay()) {
    case 0:
    case 6:
        day = "haftasonu";
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:

        day = "haftaiçi";
        break;

}
console.log(`Bugün ${day}`);



// bu durumu switch ile yazalım

/*if (age > 0 && age < 12) {
    console.log(`${firstName}  is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager`);
} else {
    console.log(`${firstName}is a adult`);
}*/

const yaş = 18;
const isim = "sena";
switch (true) {
    case (yaş >= 0 && yaş <= 12):
        console.log(`${isim} is a child`);
        break;
    case (yaş >= 13 && yaş <= 19):
        console.log(`${isim} is teenager`);
        break;
    default:
        console.log(`${isim} is a adult`);
}
console.clear();


// *******************************************


// Uygulama Zamanı

/* 20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri 
aşağıda verilmiştir. bu bilgilere göre servis uyarısı veriniz

1. bakım: 2 yıl
2. bakım: 4 yıl
3. bakım: 6 yıl
*/


var trafigeCikis = new Date("04 / 20 / 2019");
trafigeCikis.setHours(0, 0, 0, 0);
var trafikteMs = Date.now() - trafigeCikis.getTime();
var trafiktekiGun = Math.floor(trafikteMs / (1000 * 60 * 60 * 24));

console.log(trafiktekiGun);


if (trafiktekiGun <= 730) {
    console.log("Aracı 1. bakıma götür.");


} else if (trafiktekiGun > 730 && trafiktekiGun <= 1460) {
    console.log("Aracı 2. bakıma götür");

} else if (trafiktekiGun > 1460 && trafiktekiGun <= 1460 * 2) {
    console.log("Aracı 3. bakıma götür.");
} else {
    console.log("Bilinmeyen bir süre");
}

// switch (true) {
//     case (trafiktekiGun <= 730):
//         console.log("Aracı 1. bakıma götür.");
//         break;
//     case (trafiktekiGun > 730 && trafiktekiGun <= 1460):
//         console.log("Aracı 2. bakıma götür");
//         break;
//     case (trafiktekiGun > 1460 && trafiktekiGun <= 1460 * 2):
//         console.log("Aracı 3. bakıma götür.");
//         break;
//     default:
//         console.log("Bilinmeyen bir  süre");
//         break;
// }





// 2.Uygulama

var result = prompt("Who's there?")
console.log(result);
if (result == "cancel") {
    console.log("canceled");

} else if (result == "admin") {
    console.log("Welcome Admin");
    var password = prompt("enter your password");
    if (password == "cancel") {
        console.log("canceled");
    } else if (password == "1234") {
        console.log("welcome Admin");
    } else {
        console.log("wrong password");
    }
} else {
    console.log("I dont know you");
}

