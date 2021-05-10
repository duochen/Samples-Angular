System.register(['@angular/core', 'plugins-core', '@angular/forms'], function (exports) {
    'use strict';
    var Component, Extension, FormBuilder, Validators;
    return {
        setters: [function (module) {
            Component = module.Component;
        }, function (module) {
            Extension = module.Extension;
        }, function (module) {
            FormBuilder = module.FormBuilder;
            Validators = module.Validators;
        }],
        execute: function () {

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */

            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }

            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
            }

            var MyLabelComponent = exports('MyLabelComponent', (function () {
                function MyLabelComponent() {
                }
                MyLabelComponent.prototype.ngOnInit = function () {
                    console.log('My Label Init');
                };
                MyLabelComponent = __decorate([
                    Extension('my-label', []),
                    Component({
                        selector: 'my-label',
                        template: "<h1>My Label</h1>"
                    })
                ], MyLabelComponent);
                return MyLabelComponent;
            }()));

            var MyButtonComponent = exports('MyButtonComponent', (function () {
                function MyButtonComponent() {
                }
                MyButtonComponent.prototype.ngOnInit = function () {
                    console.log('My Button Init');
                };
                MyButtonComponent = __decorate([
                    Extension('my-button', []),
                    Component({
                        selector: 'my-button',
                        template: "<button>Duo Button</button>"
                    })
                ], MyButtonComponent);
                return MyButtonComponent;
            }()));

            var MyFormComponent = exports('MyFormComponent', (function () {
                function MyFormComponent(fb) {
                    this.fb = fb;
                    this.form = fb.group({
                        name: fb.group({
                            first: ['Nancy', Validators.minLength(2)],
                            last: 'Drew'
                        }),
                        email: ''
                    });
                }
                MyFormComponent.prototype.ngOnInit = function () {
                    console.log('My Form Init');
                    console.log('FB:', this.fb);
                    console.log('Form', this.form);
                };
                MyFormComponent.prototype.onSubmit = function () {
                    console.log("Submit button is clicked!");
                };
                MyFormComponent = __decorate([
                    Extension('my-form', []),
                    Component({
                        selector: 'my-form',
                        template: "<form>\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"alterEgo\">Alter Ego</label>\n        <input type=\"text\" class=\"form-control\" id=\"alterEgo\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>\n</form>",
                        providers: [FormBuilder]
                    }),
                    __metadata("design:paramtypes", [FormBuilder])
                ], MyFormComponent);
                return MyFormComponent;
            }()));

        }
    };
});
