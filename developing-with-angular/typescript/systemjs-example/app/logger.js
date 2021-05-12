System.register([], function (exports_1, context_1) {
    "use strict";
    var Logger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Logger = /** @class */ (function () {
                function Logger(outputId) {
                    this.output = document.getElementById(outputId);
                }
                Logger.prototype.info = function (message) {
                    this.output.innerText = "INFO: " + message;
                };
                return Logger;
            }());
            exports_1("Logger", Logger);
        }
    };
});
