const  http=new easyHTTP

// http.get('https://jsonplaceholder.typicode.com/posts',function  (err,something) {
//   if(err) {
//     console.log(err)
 
//   }else{
//     console.log(something)
//   }
// })

// let data1={
//   title:"title i know",
//   body:"body i ko"
// };



// http.post('https://jsonplaceholder.typicode.com/posts',data1,function(err,something){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(something)
//   }
// } )


// http.put('https://jsonplaceholder.typicode.com/posts/23',data1,function  (err,something) {
//   if(err){
//     console.log(err)
//   }else{
//     console.log(something)
//   }
// })
let num=23;
  http.delete(`https://jsonplaceholder.typicode.com/posts/${num}`,function(post){
  console.log(post)
  console.log(`${num}th post deleted`)
})

 
 