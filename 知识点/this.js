// cls'

// const fn = () => (
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//   })
// )
// fn().then(res => {
//   console.log(res)
// })
// console.log('start')

// const food = () => 
// 666
// console.log(food());

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(() => {
//     console.log('promise')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
// }, 0)
// console.log('start')

// Promise.resolve().then(() => {
// console.log('promise1');             
//   const timer2 = setTimeout(() => {
//     console.log('timer2')            
//   }, 0)
// });
// const timer1 = setTimeout(() => {
// console.log('timer1')
//   Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)
// console.log('start');          

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
const promise2 = promise1.then(() => {
  throw new Error('error!!!')
})
console.log('promise1', promise1)
console.log('promise2', promise2)
setTimeout(() => {
  console.log('promise1', promise1)
  console.log('promise2', promise2)
}, 2000)

//promise1  pending  
//promise2  pending


console.log(0.1+0.2);