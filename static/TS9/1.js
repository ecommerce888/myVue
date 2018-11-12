var C = /** @class */ (function () {
    function C() {
        this.constructorOnly = 0;
        this.constructorUnknown = undefined;
    }
    C.prototype.method = function () {
        this.constr1111uctorOnly = false; // error, constructorOnly is a number
        this.constructorUnknown = "plunkbat"; // ok, constructorUnknown is string | undefined
        this.methodOnly = 'ok'; // ok, but y could also be undefined
    };
    C.prototype.method2 = function () {
        this.methodOnly = true; // also, ok, y's type is string | boolean | undefined
    };
    return C;
}());
