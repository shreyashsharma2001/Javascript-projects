let data=[
    {
name:'john doe',
age:22,
gender:'male',
proffesion:'engineer',
image:'https://randomuser.me/api/portraits/men/25.jpg'

    },
    {
        name:'john smith',
        age:34,
        gender:'male'
        ,
proffesion:'engineer',
image:'https://randomuser.me/api/portraits/men/23.jpg'
        
            },
            {
                name:'casy bailey',
                age:32,
                gender:'female',
                image:'https://randomuser.me/api/portraits/women/25.jpg'
                ,
proffesion:'engineer'
                
                    },
                    {
                        name:'mayu dodo',
                        age:33,
                        gender:'gfemale',
                        proffesion:'engineer',
                        image:'https://randomuser.me/api/portraits/women/72.jpg'
                        
                            },
]


let gogo=namesgo(data)
 
// console.log(gogo.next().info.name)

 document.querySelector('.btn').addEventListener('click',()=>{
    let h=gogo.next().info
    // window.location.reload()
    if(h===undefined){
        window.location.reload() 
        return document.querySelector('.info')
    }else{
     document.querySelector('.info').innerHTML=`
     <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="${h.image}">
          <span class="card-title">${h.name}</span>
        </div>
        <div class="card-content">
           <ul>
               <li>Name:${h.age}</li>
               <li>Gender:${h.gender}</li>
               <li>Proffession:${h.proffesion}</li>
             
           </ul>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
     `
    }
 })


function namesgo(names) {
    let index=0;
      
        return { 
            next:()=>{
               if(index<names.length){
                   return{
                       info:names[index++],
                       done:false
          
                   }
               }else{
                   return{
                       done:true
                       
                   }
                   
               
            }
        }
    }
    //  return { 
    //      next:()=>{
    //         if(index<names.length){
    //             return{
    //                 info:names[index++],
    //                 done:false
       
    //             }
    //         }else{
    //             return{
    //                 done:true
    //             }
                
    //         }
    //      }
    //  }
     
     
}
// let gogo=namesgo(data)
// let h=gogo.next().info
// console.log( h.name)

//  document.querySelector('.btn').addEventListener('click',()=>{
//      document.querySelector('.info').innerHTML=`
//      <div class="row">
//     <div class="col s12 m7">
//       <div class="card">
//         <div class="card-image">
//           <img src="${h.image}">
//           <span class="card-title">${h.name}</span>
//         </div>
//         <div class="card-content">
//            <ul>
//                <li>Name:${h.age}</li>
//                <li>Gender:${h.gender}</li>
//                <li>Proffession:${h.proffesion}</li>
             
//            </ul>
//         </div>
//         <div class="card-action">
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>
//   </div>
      
//      `
//  })
 
