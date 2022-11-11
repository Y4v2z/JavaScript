// Rest Parameters
// Rest parametreler aldığı argümanları doğrudan diziye çevirir.
function sumES5(){
let arr=Array.prototype.slice.call(arguments)
let result=0;
arr.forEach(function(item){
    result+=item;
})
return result;
};
console.log(sumES5(10,20,30)); 


function sumES6(...arr){
    let result=0;
    arr.forEach(item=>result+=item);
    return result;
}
console.log(sumES6(10,20,30)); 

// ES5
/*function isDrivers(){
    let d_yil=Array.prototype.slice.call(arguments);
    d_yil.forEach(function(yil){
        console.log(2022-yil>=18);
    })
}
isDrivers(1990,2010,2000,2015);*/

// ES6
function isDriver(age, ...years){
    years.forEach(year=>console.log(2022-year>=age))
};
isDriver(18,1990,2010,2000,2015); // dizideki ilk paramet olan 18 age demektir. diğerleri sırayla years dizisine girer.


// Rest parametresi argümanların (parametrelerin) en sonuna yaılmalıdır.

// ****************************************************

// Destructuring






// Destructuring Assignment
var a, b, rest;
[a,b]=[10,20];
console.log(a);
console.log(b);

[a,b,...rest]=[30,40,50,60,70]
console.log(a);
console.log(b);
console.log(rest);

// şöyle de yazılabilir
({a,b}={a:10, b:20});
console.log(a);
console.log(b);

({a,b,...rest}={a:30,b:40,c:50,d:60,e:70});
console.log(a);
console.log(b);
console.log(rest);


// Array Destructuring
// ES5
const arrConfig=["localhost", "8080", "900"];
// var server= arrConfig[0];
// var port= arrConfig[1];
// var timeout= arrConfig[2];
// console.log(server, port, timeout);

// ES6
// const[server, port, timeout]=arrConfig;
// console.log(server, port, timeout);


// Object Destructuring
// ES5
// const objConfig={
//     server:"localhost",
//     port: "8080",
//     timeout:"900"
// }

// var server=objConfig.server;
// var port=objConfig.port;
// var timeout=objConfig.timeout;

// console.log(server, port, timeout);

// ES6
// var {server, port, timeout}= objConfig;
// console.log(server, port, timeout);

// let {timeout : t} = objConfig;
// console.log(t);

const objConfig={
    server:"localhost",
    port: "8080",
    // timeout:"900"
}
let {server, port, timeout=800}=objConfig;
console.log(server, port, timeout);
// şayet yukarıda timeout değeri yoksa aşağıda değişkenin içinde verilebilir.
// diyelimki timeout u örnekte olduğu gibi daha sonra yukarıda tanımladık ve 
// iki değer farklı ise yukarıda objConfig içinde tanımlanan değer atanır.


const days=["monday","tuesday","wednesday","thursday","firday"];
// const [wed,fri]=days;
// console.log(wed,fri);//bu durumda konsola dizinin 1.ve2. elemanı yazılır.(monday,tuesaday)

const [,,wed,,fri]=days;
console.log(wed,fri);//bu duurmda konsola wednesday ve friday yazar. bıraktığımız virgüller bir elemanı öteler.
