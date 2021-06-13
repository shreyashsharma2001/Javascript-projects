// let [a,b]=[10,20]
// console.log(a)
// console.log(b)

// function name() {
//     return [12,34,5,67,33]
// }

// let [a,b,...rest]=name()
// console.log(a)
// console.log(rest)


//  let person={
//      name:"yash",
//      age:18,
//      gender:"male",
//      city:"majalgaon"

//  }

//  let {name,age,...rest}=person
//  console.log(name)
//  console.log(rest)

({a,b,c,d,...rest}={a:12,b:23,c:45,d:56,e:67,f:78})
console.log(a);
console.log(rest)
console.log(c,d)