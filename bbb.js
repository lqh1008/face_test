// export default {
//   a: 111,
//   b: 222
// }

//a.js
let sex = "boy";
export { sex }
//原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
// 其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。