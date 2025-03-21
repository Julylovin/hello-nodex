// src/cjs/index.cjs
// const m = require('./module.cjs')
// console.log(m)

// src/cjs/index.cjs
const m = require("./module.cjs");
console.log(m);
// ES6直接这样写
const { foo, bar } = require("./module.cjs");
foo();
console.log(bar);

// ######### 新的变量名规则 #######

// src/cjs/index.cjs
const {
  foo: foox, // 这里进行了重命名
  bar: barx,
} = require("./module.cjs");

// 就不会造成变量冲突
 
console.log(foox);

// 用新的命名来调用模块里的方法
foox();

// 这个不冲突就可以不必处理
console.log(barx);
