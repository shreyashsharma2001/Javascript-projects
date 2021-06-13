class EasyHTTP{

 async get(url){
    let responce=await fetch(url)

    let resdata=await responce.json()
     return resdata
 }

 async post(url,data){
    let responce=await fetch(url,{
         method:"POST",
         headers:{
             'Content-type':'application/json'
         },
         body:JSON.stringify(data)

     })
    let resdata=await responce.json()
     return resdata
 }

 async put(url,data){
    let responce=await fetch(url,{
         method:"PUT",
         headers:{
             'Content-type':'application/json'
         },
         body:JSON.stringify(data)
     })
     let resdata=await responce.json()
     return resdata
 }

 async delete(url){
    let  response=await fetch(url)
    let resdata=await 'deleted'
     return resdata
 }
}