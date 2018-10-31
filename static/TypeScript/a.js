var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype[Symbol.hasInstance] = function (foo) {
        return foo instanceof Array;
    };
    return MyClass;
}());
[1, 2, 3] instanceof new MyClass(); // true
