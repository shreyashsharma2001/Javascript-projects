 const obj=[
     {name:"yash",rollNo:45},
     {name:"yash1",rollNo:455}
 ];

   let createObj=function(post) {
     return new Promise(function(resolve,reject){
      setTimeout(function(){
        obj.push(post)
        let err=true
        if(err){
           
          reject("something went wrong")
        }else{
        resolve();
        }
    },2000);
     })
       
     
      
 }


   function getPost() {
      setTimeout(function(){
          let output=''
          obj.forEach(function(post){
output=output+`<li>${post.name}</li>`

          })
          document.body.innerHTML=output
      },1000)
 }

 createObj({name:"yash3",rollNo:34})
 .then(getPost)
 .catch(function(d){
    document.body.innerHTML=d
  console.log(d)
 })
  
  