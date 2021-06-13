//  function gogo(names) {
//      let index=0;
//      return {
//         next:()=>{
            
//               return index < names.length ?
//               {value:names[index++],done:false}:
//               {
//                   done:true
//               }
//          }
//      }
//  }

//  let nameArr=['yash','sam','suresh']
//  let names1=gogo(nameArr)
//  console.log(names1.next().value)
//  console.log(names1.next())
//  console.log(names1.next())
//  console.log(names1.next())

function *name() {
    yield 'jack'
    yield 'jack2'
    yield 'jack3'
}

let n=name()
console.log(n.next())