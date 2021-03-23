// b.js
// 本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import {
  sex
} from "./bbb.js"
// import any12 from "./a.js" 
console.log(sex) // boy,boy