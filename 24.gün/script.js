// Callback

// let products=[
//     {id:1, name:"Samsung S8", price:3000},
//     {id:2, name:"Samsung S7", price:2000},
//     {id:3, name:"Samsung S6", price:1000}
// ];

/*function addProductToDatabase(prd, callback){
    
        setTimeout(()=>{
            products.push(prd);
            callback();
            // callback(products.push(prd));
        },2000)
    };


function getProductFromDatabase(){
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        });
    }, 1000);
};
addProductToDatabase({id:4, name:"iphone", price:5000},getProductFromDatabase);
// getProductFromDatabase(products);*/



/*let added= true;
function addProductToDatabase(prd, callback){
    if(added){
        setTimeout(()=>{
            products.push(prd);
            callback(null, prd);
            // callback(products.push(prd));
        },2000)

    }else{
        callback("500",prd);
    }
};

function getProductFromDatabase(){
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        });
    }, 1000);
};

addProductToDatabase({id:4, name:"iphone", price:5000}, function(err, data){
    if(err){
        console.log("hata:"+err);
    }else{
        console.log(data);
    }
});*/

// ********************************************************************



// Promise


/*function addProductToDatabase(prd,callback){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
           products.push(prd);
           let added =true;
           if(added){
            resolve();
           } else{
            reject("hata: 500")
           }
        });
    });
}
function getProductFromDatabase(){
    setTimeout(() => {
        products.forEach(p => {
            console.log(p.name);
        });
    }, 1000);
};

addProductToDatabase({id:4, name:"iphone", price:5000}).then(getProductFromDatabase).catch(function(err){
    console.log(err);
});*/


// **********************************************
// uygulama zamanı
// Asynchronous JS with Promise

/*var p = new Promise(function(resolve,reject){
    if (true) {
        resolve("succes");
    }else{
        reject("failure");
    }
});

p.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});*/


/*new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve(5)
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(Number){
    console.log(Number);
    return number*number;
}).then(function(number){
    console.log(number);
});*/



const isMomHappy=true;
const willGetNewPhone=new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name:"iphone8",
            price: 5000,
            color: "silver"
        };
        resolve(phone);
    }else{
        const error=new Error("Mom is not happy");
        reject(error);

    }
});

const showToFriends=function(phone){
    const message="Hi friends this is my new phone "+phone.name
    return Promise.resolve(message);
}

const askMom=function(){
    willGetNewPhone
    .then(showToFriends)
    .then(message=>console.log(message))
    .catch(error=>{
        console.log(error);
    })
}

askMom();