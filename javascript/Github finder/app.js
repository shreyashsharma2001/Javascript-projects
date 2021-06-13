const gitu=new Github
const ui=new UI


let space=document.querySelector('#searchUser')

space.addEventListener('keyup',(e)=>{
    let  output=e.target.value
    if(output!==''){
         gitu.getUsers(output)
         .then((data)=>{ 
             if(data.getData.message==='Not Found'){
// show alert
   ui.showAlet("User not find ",'red-text red lighten-3 center alert1')
  
             }else{
         ui.showProfile(data.getData)
          
             }
         })
    } else{
         document.querySelector('.display').innerHTML=''
    }
})// 
 