System.register([], function (exports_1, context_1) {
    "use strict";
    var TextBoxComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TextBoxComponent = /** @class */ (function () {
                function TextBoxComponent(text) {
                    this.text = text;
                }
                TextBoxComponent.prototype.render = function () {
                    console.log("Rendering '" + this.text + "' value.");
                };
                return TextBoxComponent;
            }());
            exports_1("TextBoxComponent", TextBoxComponent);
        }
    };
});
