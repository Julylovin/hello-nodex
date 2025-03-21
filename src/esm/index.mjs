// src/esm/index.mjs
// import m from './module.mjs'
// console.log(m)
// import { foo as foox, bar } from './module.mjs'
// foox()
// console.log(bar)

// src/esm/index.mjs
// 注意这里使用了另外一种方式，将所有的命名导出都挂在了 `m` 变量上
import * as m from "./module.mjs";

console.log(typeof m);
console.log(Object.keys(m));

m.foo();
console.log(m.bar);

// src/esm/index.mjs
import {
  foo as foo2, // 这里进行了重命名
  bar,
} from "./module.mjs";

// 就不会造成变量冲突
const foo = 1;
console.log(foo);

// 用新的命名来调用模块里的方法
foo2();

// 这个不冲突就可以不必处理
console.log(bar);

import md5 from "md5";
console.log(md5("Hello World"));
