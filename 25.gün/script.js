// XMLHttp Request & Promise
let myObj={
    // method:"POST",
    url:"https://randomuser.me/api/?results=5",
    // headers:{"content-type":"application/json"}
};

/*let request=obj=>{
    return new Promise((resolve, reject)=>{
        let xhr= new XMLHttpRequest();
        xhr.open(myObj.method || "GET", obj.url);
        if(xhr.headers){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);               
            });
        }
        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<300){
              resolve(xhr.response);  
            }else{
                reject(xhr.statusText)
            }
        }
        xhr.onerror=()=>{
            reject(xhr.statusText)
        }
        xhr.send(obj.body)

    });
}
let buildHtml=function(data){
    let users=JSON.parse(data)
    let html="";
    users.results.forEach(user=>{
        html+=`
        <div>
            <img src="${user.picture.medium}" >
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>
        </div>

        `;
    });
    document.querySelector("#users").innerHTML=html;
    return Promise.resolve("Html is loaded")
}


request(myObj)
    .then(buildHtml)
    .then(msg=>{
        console.log(msg);
    })
    .catch(error=>{
        console.log(error);
    })*/

    // *************************************************




    // Fetch Api

    // Text
    function getText(){
        fetch("text.txt")
        .then(respose=>{
            return respose.text();
        }).then(data=>{
            console.log(data);
        }).catch(error=>{
            console.log(error);
        })
    }
    getText();
    
    
    // Json
    function getJson(){
        fetch("products.json")
        .then(respose=>{
            return respose.json();
        }).then(data=>{
            console.log(data);
        }).catch(error=>{
            console.log(error);
        })
    }
    getJson();
    
    
    // External Api
    /*function getExternalApi(){
        fetch("https://randomuser.me/api/?results=5")
        .then(data=>{
            return data.json();
        }).then(users=>{
            var html="";
            users.results.forEach(user => {
                html+=`
                <div>
                <img src="${user.picture.medium}" >
                <div>
                    ${user.name.title}
                    ${user.name.first}
                    ${user.name.last}
                </div>
            </div>    
                `;
                
            });
            document.querySelector("#users").innerHTML=html;
        }).catch(error=>{
            console.log(error);
        })
    }
    getExternalApi();*/



//Post External Api
function postExternalApi(){
    const url='https://jsonplaceholder.typicode.com/todos/';
    var data={
        method: "POST",
        body:JSON.stringify({
            userId:"1", title: "sample title", body: "sample bady"
        }),
        header: new Headers({
            "content-type": "application/json"
        })
    }
    fetch(url,data)
    .then(response=>{
        console.log(response);
    })
} 
// postExternalApi();
// ****************************************************************




// Asycronous JS with Async & Await

/*async function fn(){
    return ("hello");
    console.log(fn());
}


fn()
    .then(response=>console.log(response));*/
    var isError=true;
    function getCategory(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(!isError){
                    resolve("phone");
                }else{
                    reject("error")
                }
            }, 1000);
        });
    }
    function getProducts(category){
        return new Promise(resolve=>{
            setTimeout(() => {
                resolve(`5 products in ${category}`)
            },1000);
        })
    }
    getCategory()
                .then(getProducts)
                .then(response=>console.log(response))
                .catch(err=>console.log(err));

async function getProduct(){
    try{
        let category=await getCategory();
        let result=await getProducts(category);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }

}
getProduct();
