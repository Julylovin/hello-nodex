// src/cjs/module.cjs 自己在写入代码的时候，不需要包含文件路径那句注释，这句注释只是为了方便阅读时能够区分代码属于哪个文件，以下代码均如此。
// module.exports = 'Hello World'

// src/cjs/module.cjs
// module.exports = function foo() {
//     console.log('Hello World')
//   }


// src/cjs/module.cjs
function foo() {
  console.log('Hello World from foo.')
}

const bar = 'Hello World from bar.'

module.exports = {
  foo,
  bar,
}