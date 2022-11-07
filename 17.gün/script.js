// Callback Function
/*let val;

function multipleByTwo(a, b, c) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = arguments[i] * 2;
    }
    return arr;
};
function addOne(a){
    return a+1;
}
val = multipleByTwo(5, 10, 15);
// val=addOne(10);

for(let i=0; i<val.length; i++){
    val[i]=addOne(val[i]);
}
console.log(val);*/

// Önce multipleByTwo fonksiyonu saonra addOne fonksiyonunu çağırmak yerine şöyle yapılabilir:

let val;

function multipleByTwo(a, b, c, Callback) {
    let arr = [];
    if (Callback && typeof Callback === "function") {
        for (let i = 0; i < 3; i++) {
            arr[i] = Callback(arguments[i] * 2);
        }
    }
    return arr;
};
function addOne(a) {
    return a + 1;
}
function addTwo(a) {
    return a + 2;
}
function addThree(a) {
    return a + 3;
}
val = multipleByTwo(5, 10, 15, addThree);
// val=addOne(10);
// console.log(val);

// for(let i=0; i<val.length; i++){
//     val[i]=addOne(val[i]);
// } bu kısma gerek yok


// ya fonksiyonu dışarıda tanımlar Callback ile bunu çağırırız yada şöyle de yapılabilir:
val = multipleByTwo(5, 10, 15, function (x) {
    return x + 30;
});

console.log(val);



// **************************************************************************



// İmmediate Function

function welcome() {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var today = new Date();
    var msg = "welcome. Today is " + days[today.getDay()];
    return msg;

}
console.log(welcome());

// (function(){

// }());
// (function(){

// })(); immediate fonksiyonlar her iki şekilde de kullanılabilir.

/*(function (name) {
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var today = new Date();
    var msg = "welcome." + name + " Today is " + days[today.getDay()];
    console.log(msg);

})("yavuz");*/



// *********************************************************
// Functions that Return Functions

/*function question(hobby) {
    switch (hobby) {
        case "car":
            return function (name) {
                console.log(name + " Do you have a car?");
            }
            break;

        case "book":
            return function (name) {
                console.log(name + " What is your favourite book?");
            }
            break;

        case "software":
            return function (name,type) {
                console.log(name + " Are you interest in "+type);
            }
            break;

        default:
            return function (name) {
                console.log(name + " How are you?");
            }
    }
};

var carQuestion = question("car");
carQuestion("Yavuz");
var bookQuestion= question("book");
bookQuestion("Kadir");
var softwareQuestion= question("software");
softwareQuestion("Esra");
var softwareQuestion=question("software");
softwareQuestion("Yavuz","nodejs");
softwareQuestion("Ali", "Angular");*/


// ****************************************
// Getter, Setter

const person = {
    firstName: "Yavuz",
    lastName: "Avci",
   /* get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set FullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    } Burada fullname set edildi ve yazıldı. ancak bu yazım şekli aşağıdaki metot ile de yazılabilir.
    */  
};

Object.defineProperty(person,"fullName",{
    get function() {
        return `${this.firstName} ${this.lastName}`;
    },
    set function(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})
Object.defineProperty(person,"age",{
    value:50,
    writable:true,
    // Writable alanı varsayılan olarak false dır. Bu durumda age değeri dışarıdan değiştirilemez.Ancak true olarak ayarlandığında değiştiirilir.
})
person.age=55;
// person.firstName="Esra"
person.FullName="Esra Avci";
console.log(person.FullName);
console.log(person);
console.log(person.age);

// ***********************************************
// Call,Apply&Bind

var welcome=function(){
    console.log("Welcome", this.name);
}
var yigit={name:"yigit"};
var ada={name:"ada"};
welcome.call(yigit);
welcome.call(ada);
// function herhangi bir parametre almıyorsa apply ve call ikisi de aynı işlevi yapar.
welcome.apply(yigit);
welcome.apply(ada);
// bind methıdunu kullanmak için yeni bir fonksiyon ve değişken oluşturmak  oluşturmak gerekir.
welcomeYigit=welcome.bind(yigit);
welcomeYigit();
welcomeAda=welcome.bind(ada);
welcomeAda();


var welcome=function(a,b){
    console.log("Welcome", this.name+" .Are you interested in"+a+" and "+b);
}

var yigit={name:"yigit"};
var ada={name:"ada"};
welcome.call(yigit,".asp.net","angular");
welcome.call(ada,".asp.net","angular");
// function parametre aldığında  apply metotu call den ayrılır ve dizi içinde [] işlemi çağırmak gerekir.
welcome.apply(yigit,[".asp.net","angular"]);
welcome.apply(ada,[".asp.net","angular"]);

welcomeYigit=welcome.bind(yigit);
welcomeYigit(".asp.net","angular");
welcomeAda=welcome.bind(ada);
welcomeAda(".asp.net","angular");

// ********************************************************************************
var num={
    min:0,
    max:100,
    checkNumericRange: function(value){
        if(typeof value==!"number"){
            return false;
        }else{
            return value>=this.min && value<=this.max;
            
        }
    }
}

console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-20));


var num1={min:50,max:60};
console.log(num.checkNumericRange.call(num1,65));
console.log(num.checkNumericRange.apply(num1,[52]));

var useOfBind=num.checkNumericRange.bind(num1);
console.log(useOfBind(40));
