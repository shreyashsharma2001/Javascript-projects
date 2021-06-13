// let map=new Map

// let key1='something'
// let key2={}
// let key3=function () {
    
// }
// let key4=22

// map.set(key1,"value 1")
// map.set(key2, 'value 2')
// map.set(key3,234)
// map.set(key4,'value 4')

// console.log(map.get(key1),map.get(key2),map.get(key3),map.get(key4))

// console.log(map.size)
// map.forEach((key,value) => {
//     console.log(`${key}:${value}`)
// });

//  for (const [ key,value] of map) {
//     console.log(`${key}:${value}`)
//  }

//  for (const key of map.keys()) {
//     console.log(`${key}: `)
//  }


//  for (const value of map.values()) {
//     console.log(`${value}`)
//  }

// const ll=Array.from(map) 
// console.log(ll)

// const l1=Array.from(map.values())
// console.log(l1)

// const l2=Array.from(map.keys())
// console.log(l2)


let set = new Set
set.add(12)
set.add("sbasib")
set.add(false);
set.add(12+34)

console.log(set)

set.delete(false)
console.log(set)

const set2=new Set([1,true,'yash',45-46])
 
console.log(set2)

for (const key of set2.entries()) {
    console.log(key)
}


let r=Array.from(set)
r[1]=true
console.log(r)