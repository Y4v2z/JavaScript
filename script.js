// Classes

// ES5


/*var personES5=function(name, job, yearOfBirth){
    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
};
personES5.prototype.calculateAge=function(){
    return 2022-this.yearOfBirth;
};
let esra=new personES5("esra","teacher", 1993);
console.log(esra.calculateAge());
console.log(esra);*/


// ES6
/*class personES6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }
    calculateAge(){
        return 2022-this.yearOfBirth;
    }
}
let fatma=new personES6("fatma", "banker", 1997);
console.log(fatma.calculateAge());
console.log(fatma);*/


// Objeleri ister constructor ile ister class ile oluştur ancak ortaya çıkan sonuç birebir aynı.


// Static Metot

/*class personES6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }
    calculateAge(){
        return 2022-this.yearOfBirth;
    };
    static sayHi(){
        console.log("Hello there");
    }
}
let fatma=new personES6("fatma", "banker", 1997);
console.log(fatma.calculateAge());
console.log(fatma);
// Static metotlara instance lar erişemez. SayHi metotuna aşağıda olduğu gibi fatma örneğinden çalıştırılmazken person ES6 ile çalışır. 
// fatma.sayHi();
personES6.sayHi();*/





/*class point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x - b.x;
        const dy=a.y - b.y;
        return Math.hypot(dx,dy);
    }
};

const d1=new point(10,10);
const d2=new point(20,20); 
console.log(point.distance(d1,d2));*/

// static metotlar çoğunlukla veri tabanı işlemlerinde kullanırız.



// -**************************************************


// Sub Classes
// ES5

/*function personES5(firsName, lastName){
    this.firsName=firsName;
    this.lastName=lastName;
}
personES5.prototype.sayHi=function(){
    return `Hello I am ${this.firsName} ${this.lastName}`
};

function customerEs5(firsName,lastName,phone, username){
    personES5.call(this,firsName,lastName);
    this.phone=phone;
    this.username=username;
};
customerEs5.prototype=Object.create(personES5.prototype);
customerEs5.prototype.contructor=customerEs5;
let customer=new customerEs5("esra","avci",535,"esoş");
console.log(customer.sayHi());*/




// ES6

/*class personES6{
    constructor(firsName,lastName){
        this.firsName=firsName;
        this.lastName=lastName;
    }
    sayHi(){
        return `Hello I am ${this.firsName} ${this.lastName}`
    
    }
};
class customerEs6 extends personES6{
    constructor(firsName,lastName,phone,username){
        super(firsName,lastName);
        this.phone=phone;
        this.username;
    }
    static getTotal(){
        return 1000;
    }
}
let customer1=new customerEs6("yavuz","avci",12345,"y2v4z");
console.log(customer1);
console.log(customer1.sayHi());
console.log(customer1.getTotal());// bu fonksiyon static olduğu için çalışmaz.
console.log(customerEs6.getTotal());*/

// *************************************************************************************




// Asynchronous (eş zamanlı olmayan)

/*const first=()=>{
    console.log("first");
    second();
}

const second=()=>{
    setTimeout(()=>{
        console.log("second");
    },2000);
    third();
}

const third=()=>{
    console.log("third");
}
first();*/

// Bu süreçt set timeOut fonksiyonu eklenmeden önce first,second ve third sırayla çalışır.
// ancak timeOut fonksiyonu second u 2 saniye sonra çalıştır komutu berdiği için sistem
// asekron çalışarak consol first ve third yazdıktan 2 saniye sonra second ı yazar.

// ********************************************************

// Ajax&XML,Http Request

// var xhr=new XMLHttpRequest();

// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4 && xhr.status===200){
//         console.log(xhr.responseText);
//     } 
// };
// xhr.open("GET","msg.txt",true)
// xhr.send(); msg.txt de yazan text consola yazdırıldı.
// burada belirtilen "get" talep etme şeklini ifade ederken, "true" sistemin asekron çalışacağını belirtiyor ki olması gereken de bu"

/*xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else if(xhr.status===404){
            console.log("Kaynak bulunamadı");
        }
    } 
};

xhr.onprogress=function(){
    console.log("on progressing");
}// bu serverdan bilgi talep edildiğinde bekleyen işlemlerde kullanılır. Örneğin loading gibi

xhr.open("GET","msg.txt",true)
xhr.send();

console.log("hello");//Sistem asekron çalıştı ve yukarıdaki fonksiyon işlemi devam ederken önce "hello" yazıldı.
*/



// xhr.open("GET","msg1.txt",true)
// xhr.send(); Bu durumda kaynak bulunamadı yazmaktadır. Çünkü msg1.txt dosyası yok.






// server dan bilgi talep ederken genelde "GET" kullanılır. Bunun yerine "POST" da kullanılabillir.
// Ancak "POST daha çok veri tabanına bilgi girişi yapılırken kullanılır."
/*
ready state mesajları: 
0: request not initialized (istek henüz başlatılmamış)
1: server connection established (bağlantı kurulmuş)
2: request received (istek alınmış)
3: precessing request (istek sonucunun döndürülmesi devam ediyorsa)
4: request finishing and response is ready (istek tamamlanıp cevap verildiyse)


Status Mesajları:
200: "OK" (Sonuç başarılı)
403: "Forbidden" (Talep onaylanamdı)
404: "Not Found" ()

*/

// **********************************************************

