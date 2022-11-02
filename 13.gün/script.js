// ***Event Bubling (içten dışa olay etkileşimi)

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

/*form.addEventListener("click", function (event) {
    console.log("form"); // form kısmına tıkladığında formdan içten dışa container e kadar hepsine tıklamışsın gibi consola yazar.
    event.stopPropagation();
})
cardBody.addEventListener("click", function (event) {
    console.log("card body"); // cardBody kısmına tıkladığında cardBody den içten dışa container e kadar hepsine tıklamışsın gibi consola yazar.
    event.stopPropagation();
})
card.addEventListener("click", function (event) {
    console.log("card"); //event.stopProgation methodu kullanılırsa sadece tıkladığın kısım konsola yazılır.
    event.stopPropagation();
})
container.addEventListener("click", function (event) {
    console.log("container");
    event.stopPropagation();
}) */
//event.stopProgation methodu kullanılırsa sadece tıkladığın kısım konsola yazılır.




// ***Event Capturing  (dıştan içe olay etkileşimi)
// capturin yapmak için addEventListener' 3. bir parametre eklemek gerekir. Buda true değeridir.
// Çünkü addEventListener default olarak false değerini kullanır. Bu "bubling" e gider.
// 3. parametreyi true yaparsak en içteki form a tıkladığımızda konsol en dış olan container den itibaren yazmaya başlayacak.
// event.stopProgation methodu kullanılırsa yine sadece tıkladığın kısım konsola yazılır.


/*form.addEventListener("click", function (event) {
    console.log("form");
    event.stopPropagation();
}, true)
cardBody.addEventListener("click", function (event) {
    console.log("card body");
    event.stopPropagation();

}, true)
card.addEventListener("click", function (event) {
    console.log("card");
    event.stopPropagation();

}, true)
container.addEventListener("click", function (event) {
    console.log("container");
    event.stopPropagation();

}, true)*/

// event.stopProgation methodu kullanıldığında nereye tıklarsan tıkla konsol hep "container yazdırdı".
// bu hata demek. Dolayısıyla "bubling" kullanmak daha mantıklı.


// delete butonları seçilerek tıklanan butonun consola yazdırılması

// const deleteItems = document.querySelectorAll(".fa-times");
// deleteItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//         console.log(event.target);

//     })

// });
// bu ilem ul seçilerek daha kolay yapılır. Şöyle;

const ul = document.querySelector('ul');
/*ul.addEventListener("click", function (event) {
    console.log(event.target);
});*/
// bu durumda ul içinde nereye tıklarsan onun target ını yazdıracaktır. Ancak sadece ikon a yani delete tıkladığımızda "ikon" yazsın istiyorsak;

ul.addEventListener('click', function (event) {
    if (event.target.className === 'fas fa-times') {
        // console.log('ikon');
        // console.log(event.target);
        // console.log(event.target.parentElement);
        // console.log(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove(); // tıklanan ikon satırı kaldırılır.
        event.preventDefault();
        // yukarıdaki foreach kullanımı yerine bu daha mantıklı
    }
});


// ********************************************************





// Local Storage (tarayıcı kansa bili bilgiler kayıtlı kalır)
// **Set İtem
const firstName = localStorage.setItem("firstName", "Yavuz");
const lasrtName = localStorage.setItem("lastName", "Avci");

// console.log(localStorage);

// **Get İtem 
let val;
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');



// ***Remove İtem (local storage daki seçilen bilgiler silinir)
localStorage.removeItem('firstName')
localStorage.removeItem('lastName')


// ***Clear (local storage daki bütün bilgiler silinir)
localStorage.clear();

// *** Set array to storage
let hobbies = ["sinema", "kitap", "futbol"];
localStorage.setItem("hobbies", hobbies); //bu haliyle konsola object içinde string bir bilgi gibi yazar
localStorage.setItem("hobbies", JSON.stringify(hobbies)); // JSON.stringfy metodu ile object içinde dizi haliyle olarak yazar. Bunu kullanmak mantıklı
val = JSON.parse(localStorage.getItem("hobbies")); // bu haliyle de dizi olarak



console.log(val);
console.log(localStorage);




// Session Storage (tarayıcı kapandığında bilgiler gider)


const city = sessionStorage.setItem("city", "Kocaeli");
const country = sessionStorage.setItem("country", "Türkiye");
// console.log(sessionStorage);

