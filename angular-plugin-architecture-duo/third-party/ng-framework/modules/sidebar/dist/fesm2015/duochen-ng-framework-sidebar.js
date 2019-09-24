import { __decorate, __metadata } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = __decorate([
    Component({
        selector: 'ngfw-sidebar',
        template: "<h1>\r\n    <ng-content></ng-content>\r\n</h1>",
        styles: ["h1{color:green}"]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

let SidebarModule = class SidebarModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { SidebarModule, SidebarComponent as ɵa };
//# sourceMappingURL=duochen-ng-framework-sidebar.js.map
