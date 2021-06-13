// async function myFunc() {
//     const promise =new Promise((resolve,reject)=>{
//         setTimeout(() => 
//           resolve("hello")  
//         ,  2000);
//     })

// let error=true;
// if(!error){
//     let res=await promise
//     return res
// }else{
//      await Promise.reject(new Error("something went wrong"))
// }

     
// }

//  myFunc()
//  .then(res=>console.log(res))
//  .catch((err)=>console.log(err))
  

const info=new EasyHTTP

info.get('https://jsonplaceholder.typicode.com/users')
.then((data)=>console.log(data.name))