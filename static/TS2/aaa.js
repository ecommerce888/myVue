var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("Animal");
    }
    Animal.prototype.eat = function () {
        console.log("吃食物");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = this;
        console.log("Cat");
        _this = _super.call(this) || this;
        return _this;
    }
    Cat.prototype.eat = function () {
        console.log("鱼肉");
    };
    Cat.prototype.init = function () {
        _super.prototype.eat.call(this);
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.init();
