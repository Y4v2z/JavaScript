// Object Literals

/*let val;

let person = {
    firstName: "Yavuz",
    lastName: "Avci",
    age: 31,
    hobbies: ["music", "game"],
    adress: {
        city: "Kocaeli",
        country: "Türkiye"
    },
    getBirthYear: function () {
        return 2022 - this.age;

    }
};


val = person;
val = person.firstName;
val = person.lastName;
val = person["firstName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.adress;
val = person.adress.city;
val = person.adress["city"];
val = person.getBirthYear();






let people = [
    { firstName: "Yavuz", lastName: "Avci" },
    { firstName: "Esra", lastName: "Avci" },
    { firstName: "Tugba", lastName: "Avci" },
];


val = people[0];
val = people[2].firstName;
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}


console.log(val);
console.log(typeof people);*/

// *************************************


// Uygulma Zamanı

/*
Aşsğıdaki objeckt literal yapısını kullanarak en az 5 araç bilgisi tutunuz

    Araç Bilgileri:

    id: bmw116d_1234
    model: 116d
    yil: 2015
    renk: beyaz
    servis kayitlari:
            id: bmw116d_1234_1 tarih:20.01.2016 km:13000 toplam ücret:900
                servis detayı:
                id: 1 işlem: yağ değişim ücreti :300
                id: 2 işlem: filtre değişim ücreti :300
                id: 3 işlem: fren hidroliği değişim ücreti :300

            id: bmw116d_1234_2 tarih:10.01.2017 km:28000 toplam ücret:1800
                id: 1 işlem: yağ değişim ücreti :350
                id: 2 işlem: filtre değişim ücreti :350
                id: 3 işlem: fren hidroliği değişim ücreti :300
                id: 4 işlem: balata değişim ücreti :800

*/









var aracBilgileri = [
    {
        id: "bmw116d_1234",
        model: "116d",
        yil: 2015,
        renk: "beyaz",
        servisKayitlari: [
            {
                id: "bmw116d_1234_1",
                tarih: "20.01.2016",
                km: "13000",
                ucret: 900,
                detay: [
                    { id: "bmw116d_1234_1_1", aciklama: "yag değisim", ucret: 300 },
                    { id: "bmw116d_1234_1_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "bmw116d_1234_1_3", aciklama: "fren hidroliği değisim", ucret: 300 }
                ]
            },
            {
                id: "bmw116d_1234_2",
                tarih: "10.01.2017",
                km: "28000",
                ucret: 1800,
                detay: [
                    { id: "bmw116d_1234_2_1", aciklama: "yag değisim", ucret: 350 },
                    { id: "bmw116d_1234_2_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "bmw116d_1234_2_3", aciklama: "fren hidroliği değisim", ucret: 300 },
                    { id: "bmw116d_1234_2_4", aciklama: "balata değisim", ucret: 800 }
                ]
            }
        ]
    },
    {
        id: "bmw118i_1234",
        model: "bmw118i",
        yil: 2015,
        renk: "beyaz",
        servisKayitlari: [
            {
                id: "bmw118i_1234_1",
                tarih: "20.01.2016",
                km: "13000",
                ucret: 900,
                detay: [
                    { id: "bbmw118i_1234_1_1", aciklama: "yag değisim", ucret: 300 },
                    { id: "bmw118i_1234_1_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "bmw118i_1234_1_3", aciklama: "fren hidroliği değisim", ucret: 300 }
                ]
            },
            {
                id: "bmw118i_1234_2",
                tarih: "10.01.2017",
                km: "28000",
                ucret: 1800,
                detay: [
                    { id: "bmw118i_1234_2_1", aciklama: "yag değisim", ucret: 350 },
                    { id: "bmw118i_1234_2_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "bbmw118i_1234_2_3", aciklama: "fren hidroliği değisim", ucret: 300 },
                    { id: "bmw118i_1234_2_4", aciklama: "balata değisim", ucret: 800 }
                ]
            }
        ]
    },
    {
        id: "bmw116d_1234",
        model: "320d",
        yil: 2015,
        renk: "beyaz",
        servisKayitlari: [
            {
                id: "320d_1234_1",
                tarih: "20.01.2016",
                km: "13000",
                ucret: 900,
                detay: [
                    { id: "320d_1234_1_1", aciklama: "yag değisim", ucret: 300 },
                    { id: "320d_1234_1_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "320d_1234_1_3", aciklama: "fren hidroliği değisim", ucret: 300 }
                ]
            },
            {
                id: "320d_1234_2",
                tarih: "10.01.2017",
                km: "28000",
                ucret: 1800,
                detay: [
                    { id: "320d_1234_2_1", aciklama: "yag değisim", ucret: 350 },
                    { id: "320d_1234_2_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "320d_1234_2_3", aciklama: "fren hidroliği değisim", ucret: 300 },
                    { id: "320d_1234_2_4", aciklama: "balata değisim", ucret: 800 }
                ]
            }
        ]
    },
    {
        id: "bmw340_1234",
        model: "340",
        yil: 2015,
        renk: "beyaz",
        servisKayitlari: [
            {
                id: "bmw340_1234_1",
                tarih: "20.01.2016",
                km: "13000",
                ucret: 900,
                detay: [
                    { id: "bmw340_1234_1_1", aciklama: "yag değisim", ucret: 300 },
                    { id: "bmw340_1234_1_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "bmw340_1234_1_3", aciklama: "fren hidroliği değisim", ucret: 300 }
                ]
            },
            {
                id: "bmw340_1234_2",
                tarih: "10.01.2017",
                km: "28000",
                ucret: 1800,
                detay: [
                    { id: "bmw340_1234_2_1", aciklama: "yag değisim", ucret: 350 },
                    { id: "bbmw340_1234_2_2", aciklama: "filtre değisim", ucret: 300 },
                    { id: "bmw340_1234_2_3", aciklama: "fren hidroliği değisim", ucret: 300 },
                    { id: "bmw340_1234_2_4", aciklama: "balata değisim", ucret: 800 }
                ]
            }
        ]
    }
]

console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].yil);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[0]);
console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[1].km);
console.log(aracBilgileri[0].servisKayitlari[1].ucret);
console.log(aracBilgileri[0].servisKayitlari[0].detay);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);

console.log(aracBilgileri[1]);
console.log(aracBilgileri[2]);
console.log(aracBilgileri[3]);

console.clear();
// ************************************************




// Loops (Döngüler)

// For Lop
/*
for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        console.log("en sevdiğim rakam " + i);
        continue;
    }
    if (i == 6) {
        console.log("en sevmediğim rakam : 6");
        break;
    }

    console.log(i); 
} */
// yukarıda continue yazılmazsa dizi 1,2, en sevdiğim rakam 3, 3,4,5... şeklinde devam eder. continue dersek 4 ten devam eder.
// "break" yazılsırsa şayet döngü orada biter. 6 dan sonra devam etmez.



// While Loop

/*for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0
while (i < 10) {
    console.log(i);
    i++;
} */






// Do-While Loop
/*let i=0;
do {
    console.log(i);
    i++;
} while (i<10);  */




/*let sonuc = 1;
for (i = 10; i > 0; i--) {
    if (i % 2 == 1) { 
        sonuc *= i;
    }
}
console.log(sonuc);*/
/* i%2==0 i nin mod 2 si sadece çift ssayıları bulur ve çarpar i&2==1 sadece tek sayıları bulur ve çarpar*/



/*for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i:${i} j:${j}`);
    }
}*/



/*let value = '\n'; // bir alt satıra geç karakteri
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        value += '* ';
    }
    value += '\n';
}
console.log(value);*/

// *********************************************************


// Loops in Array&objects Döngüler Diziler ve Objeler üzerinde nasıl kullanılır?

let cars = ["Bmw", "Mercedes", "Toyota"]
let people = [
    { firstName: "Yavuz", lastName: "Avci" },
    { firstName: "Esra", lastName: "Avci" },
    { firstName: "Tugba", lastName: "Avci" },

];




// arrays
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }




// Objects
// for (let i = 0; i < people.length; i++)
//     console.log(people[i].firstName);







// For-in   Loop
// Arrays
// bu metotta for içine yukarıdaki gibi koşul yazmadan çalıştırabiliyoruz
/*for (let i in cars) {
    // console.log(cars[i]);
    console.log(`index : ${i} value :${cars[i]}`);
}*/




// Objects
for (let i in people) {
    console.log(`İndex :${i} value :${people[i].firstName}`);
}





// Foreach Loop
// objects
// dizinin içinde ki (cars dizisi) sırayla item in içine kopyalanır ve yazılır

/* cars.forEach(function (item) {
  console.log(item);
})*/
people.forEach(function (item) {
    console.log(item.firstName);
});




// "map" ile object i dizi gibi yazma yada diyi başka bir diziye dönüştürebiliriz
let val = people.map(function (item) {
    return item.firstName + " " + item.lastName
});
console.log(val);





let numbers = [1, 5, 8, 10];
let num = numbers.map(function (n) {
    return n * n;
});
console.log(num);

// **************************************

// Uygulama Zamanı
/* sayı tahmin oyunu
1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın
**puanlama yapın
**kullanıcı kaç kerede bulacağını belirtebilsin
*/
console.clear();


var hak, can;
var tahmin, sayac = 0
var sayi = Math.floor((Math.random() * 10) + 1);
can = Number(prompt("kaç kerede bileceksiniz"));
hak = can;
console.log(sayi);

while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt("Bir Sayı Giriniz"));
    if (sayi == tahmin) {
        console.log(`Tebrikler ${sayac} defada bildiniz.`)
        console.log(`puan: ${100 - (100 / can) * (sayac - 1)}`);
        break;
    } else if (sayi > tahmin) {

        console.log("Tahmininizi arttırın");
    } else {
        console.log("tahmininizi azaltın");
    }
    if (hak == 0) {
        console.log('Hakkınız bitti. sayı :' + sayi);
    }
}