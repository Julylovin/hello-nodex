var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 这是一个基础类
var UserBase = /** @class */ (function () {
    function UserBase(userName) {
        this.name = userName;
    }
    return UserBase;
}());
// 这是另外一个类，继承自基础类
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getName = function () {
        console.log(this.name);
    };
    return User;
}(UserBase));
// 这个变量拥有上面两个类的所有属性和方法
var petter = new User('Petter');
petter.getName();
// 可以在 demo 里运行这段代码
function counter(count) {
    console.log("The current count is: ".concat(count, "."));
}
// 不论传数值还是字符串，都可以达到的目的
counter(1); // The current count is: 1.
counter('2'); // The current count is: 2.
// 只有返回 null 值才能定义返回类型为 null
function sayHi(name) {
    // 这里判断参数不符合要求则提前终止运行，但它没有返回值
    if (!name)
        return;
    // 否则正常运行
    console.log("Hi, ".concat(name, "!"));
}
sayHi('11'); // Hi, Petter!
// 注意这里的返回值类型
function queryData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Hello World');
        }, 3000);
    });
}
queryData().then(function (data) { return console.log(data); });
