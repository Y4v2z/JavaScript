// Event Listeners (olay oluşturma)

/*const btn = document.querySelector("#btnDeleteAll");
btn.addEventListener('click', function () {
    console.log('btn clicked');
})
// Yada fonksiyon dışarıda oluşturulupta aynı işlem yapılabilir. Aşağıdaki gibi

function btnClick() {
    console.log('btn clicked');
} // Fonksiyonu dışarıda oluşturmanın şöyle bir avantaj var: aynı fonsiyonu başka bir event içinde de kullanabilirsin.

btn.addEventListener('click', btnClick);

const btn2 = document.querySelector('#btnAddNewTask');*/
// btn2.addEventListener('click', btnClick);// burada yukarıdaki fonksiyonu kullandı.

/*const btn = document.querySelector('#btnDeleteAll');
btn.addEventListener('click', function (e) {

    let val;
    val = e;
    val = e.target;
    val = e.target.id;
    val = e.target.classList;
    val = e.type;
    console.log(val);
    // console.log('btn clicked');
    e.preventDefault();
});*/



// ************************************************

// Mause Events

// const btn = document.querySelector('#btnDeleteAll');
// const ul = document.querySelector('#task-list');

// click
// btn.addEventListener('click', eventHandler);
// ul.addEventListener('click', eventHandler);

// Double Click
// btn.addEventListener('dblclick', eventHandler)

// Double Down
// btn.addEventListener('mousedown', eventHandler); //Mouse tıkladığın tam o anı ifade eder.

// // Double Up
// btn.addEventListener('mouseup', eventHandler); ////Mouse tıklayıp bıraktığın o anı ifade eder.

// // Mouseenter
// ul.addEventListener("mouseenter", eventHandler);// Seçili bölgenin (ul) üzerine mouse geldiğinde çalışır.

// // Mouseleave
// ul.addEventListener("mouseleave", eventHandler);// Seçili bölgenin (ul) üzerinden mouse ayrıldığında çalışır.

// // Mouseover
// ul.addEventListener("mouseover", eventHandler);// Seçili bölgenin (ul) üzerine ve onun herbir alt elementlerine (li) mouse geldiğinde çalışır.

// // Mouseout
// ul.addEventListener("mouseout", eventHandler);// Seçili bölgenin (ul) üzerinden ve onun herbir alt elementinden (li) mouse ayrıldığında çalışır.

// Mause Move
// ul.addEventListener("mousemove", eventHandler); //Seçili bölge üzerinde mouse hareket ettikçe çalışır.


// Aşagıda tanımladığım eventHandler isimli ortak fonksiyon
// function eventHandler(event) {
//     console.log(`event type: ${event.type}`);
// }

/*const h5 = document.querySelector('h5');
ul.addEventListener('mousemove', eventHandler);

function eventHandler(event) {
    console.log(`even type : ${event.type}`);
    h5.textContent = `Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`;

};  */


// Keyboards Event (herhangi bir tuşa basıldığında gerçekleşecek olan olaylar)


const input = document.querySelector('#txtTaskName');
// // Keydown (klavyede tuşa basıldığı an konsola yazdıracaktır)
// input.addEventListener('keydown', eventHandler);

// // Keyup (klavyede tuşa basıldığı an konsola yazdıracaktır)
// input.addEventListener('keyup', eventHandler);

// // Keypress ()
// input.addEventListener('keypress', eventHandler);

// // focus (Mous input un üzerine tıklandığı anda değer çalışır)
// input.addEventListener('focus', eventHandler);

/*// focus (Mous input un üzerine tıklandığı anda değer çalışır)
// focus olduğunda şu özelliği kullanabiliriz.
input.addEventListener('focus', eventHandler);
function eventHandler(e) {
    console.log('event type ' + e.type);
    // console.log('key code : ' + e.keyCode);
    // console.log('key value : ' + e.target.value);
    e.target.style.backgroundColor = "yellow";
}*/

// // Blur (Mous inputa tıkladıktan (yani fcus olduktan) sonra inputtan çıktığın anda blur gerçekleşir)
// input.addEventListener('blur', eventHandler);

// // Cut (İnptun içine yazılan değer kesilirse cut gerçekleşir)
// input.addEventListener('cut', eventHandler);

// // paste (İnptun içine bir değer yapıştırılırsa paste gerçekleşir)
// input.addEventListener('paste', eventHandler);


// const form = document.querySelector('form');
// // Submit (formu gönderme)
// form.addEventListener('submit', eventHandler);

// // Select (forma yazılan metnin herhangi bir kısmını seçtiğin an select gerçekleşir)
// form.addEventListener('select', eventHandler);

// sonradan eklediğim select üzerindeki çalışma
const select = document.querySelector('#select');
select.addEventListener('change', eventHandler)

function eventHandler(e) {
    console.log('event type ' + e.type);
    // console.log('key code : ' + e.keyCode);
    console.log('key value : ' + e.target.value);
    e.preventDefault();
}







