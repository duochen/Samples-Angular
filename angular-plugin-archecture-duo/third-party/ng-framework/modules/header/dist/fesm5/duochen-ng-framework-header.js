import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'ngfw-header',
            template: "<h1>\r\n    <ng-content></ng-content>\r\n</h1>",
            styles: ["h1{color:red}"]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                HeaderComponent
            ],
            exports: [
                HeaderComponent
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=duochen-ng-framework-header.js.map
