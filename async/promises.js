// const promise = new Promise((resolve, reject)=> {
//  //   resolve(console.log('Hello from promise'))
//     resolve('Hello from promise')
// //reject("CUSTOM ERROR")
// //reject(new Error('Error in promise'))
// })

// //console.log(promise)

// promise
// .then((value)=>{
//  //   console.log(`RESOLVED VALUE: "${value}"`)
//     return value.toUpperCase()
// })
// .then((upperValue)=>{
//     console.log(upperValue)
//    })
// .catch((e)=>{
//     console.log(e)
// })
// .finally(()=>{
//     console.log('final')
// })

// Promise.resolve('Hello').then().catch()
// Promise.reject(new Error("Error")).then().catch((e)=>console.log(e.message))

// //All
function promiseA() {
  return Promise.resolve('A');
//   return setTimeout(()=>Promise.resolve('A'), 100)
}

function promiseB() {
  return Promise.resolve('B');
//    return setTimeout(()=>Promise.resolve('B'), 101)
}

function promiseC() {
//    return Promise.resolve('C')
  return Promise.reject(new Error('Error C'));
}

// //promiseA().then(promiseB).then(promiseC)

// Promise.all([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
// .then((values)=>{
//     console.log(values)
// }).catch(e => console.log(e.message))

// //allSettled
// Promise.allSettled([
//     promiseA(),
//     promiseB(),
//     promiseC()
// ])
// .then((values)=>{
//     console.log(values)
// })

// race - returns first promise regardless of status
Promise.race([
  promiseA(),
  promiseB(),
  promiseC(),
])
  .then((values) => {
    console.log(values);
  }).catch((e) => e.message);

// any - returns first fulfiled promise
Promise.any([
  promiseA(),
  promiseB(),
  promiseC(),
])
  .then((values) => {
    console.log(values);
  }).catch((e) => e.message);
