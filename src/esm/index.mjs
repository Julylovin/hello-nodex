// src/esm/index.mjs
// import m from './module.mjs'
// console.log(m)
// import { foo as foox, bar } from './module.mjs'
// foox()
// console.log(bar)

// src/esm/index.mjs
// 注意这里使用了另外一种方式，将所有的命名导出都挂在了 `m` 变量上
import * as m from './module.mjs'

console.log(typeof m)
console.log(Object.keys(m))

m.foo()
console.log(m.bar)