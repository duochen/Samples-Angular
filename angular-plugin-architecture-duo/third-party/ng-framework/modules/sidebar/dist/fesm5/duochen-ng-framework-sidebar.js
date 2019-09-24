import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Component({
            selector: 'ngfw-sidebar',
            template: "<h1>\r\n    <ng-content></ng-content>\r\n</h1>",
            styles: ["h1{color:green}"]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                SidebarComponent
            ],
            exports: [
                SidebarComponent
            ]
        })
    ], SidebarModule);
    return SidebarModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SidebarModule, SidebarComponent as ɵa };
//# sourceMappingURL=duochen-ng-framework-sidebar.js.map
