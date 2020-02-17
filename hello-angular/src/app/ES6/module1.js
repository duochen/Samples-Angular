"use strict";
exports.__esModule = true;
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent(text) {
        this.text = text;
    }
    TextBoxComponent.prototype.render = function () {
        console.log("Rendering '" + this.text + "' value.");
    };
    return TextBoxComponent;
}());
exports.TextBoxComponent = TextBoxComponent;
