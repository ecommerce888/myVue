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
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component.prototype.render = function () {
        return (<h2>
        {this.props.children}
      </h2>);
    };
    return Component;
}(React.Component));
// OK
<Component>
  <h1>Hello World</h1>
</Component>
    // Error: children is of type JSX.Element not array of JSX.Element
    ,
        // Error: children is of type JSX.Element not array of JSX.Element
        <Component>
<h1>Hello World</h1>
<h2>Hello World</h2>
</Component>
            // Error: children is of type JSX.Element not array of JSX.Element or string.
            ,
                // Error: children is of type JSX.Element not array of JSX.Element or string.
                <Component>
<h1>Hello</h1>
World
</Component>;
