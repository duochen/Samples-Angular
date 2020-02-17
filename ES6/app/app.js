System.register(["./module1", "./logger"], function (exports_1, context_1) {
    "use strict";
    var module1_1, logger_1, textBox, logger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (module1_1_1) {
                module1_1 = module1_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            textBox = new module1_1.TextBoxComponent('hello world');
            textBox.render();
            logger = new logger_1.Logger('content');
            logger.info('hello world');
        }
    };
});
