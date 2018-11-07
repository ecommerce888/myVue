var X;
(function (X) {
    var Z = /** @class */ (function () {
        function Z() {
        }
        return Z;
    }());
    X.Z = Z;
})(X || (X = {}));
// ... elsewhere ...
(function (X) {
    var Z;
    (function (Z) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        Z.C = C;
    })(Z = X.Z || (X.Z = {}));
})(X || (X = {}));
