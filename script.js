/*
const age = parseInt(prompt("Enter your age"));
const promise = new Promise((resolve,reject)=>{
    if(age >= 18){
        resolve("Eligible to Vote")
    }
    else{
        reject("Not eligible to vote")
    }
})
// console.log(p)
promise.then((data)=>console.log(data)).catch((error)=>console.log(error));
*/

function add(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num+2),3000)
    }
    )
}
add(2)

.then((data)=>{
    console.log(data);
    return add(data);   
})
.then((ele)=>{
    console .log(ele);
    return add (ele);
})
.then((ten)=>{
    console.log(ten);
    return add(ten);
})
.then((twelve)=>{
    console.log(twelve);
    
})
.catch((error)=>console.log(error))