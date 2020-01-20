(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.service */ "./src/app/popup.service.ts");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.component */ "./src/app/popup.component.ts");





let AppComponent = class AppComponent {
    constructor(injector, popup) {
        this.popup = popup;
        // Convert `PopupComponent` to a custom element.
        const PopupElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_2__["createCustomElement"])(_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], { injector });
        // Register the custom element with the browser.
        customElements.define('popup-element', PopupElement);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <input #input value="Message">
    <button (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button (click)="popup.showAsElement(input.value)">Show as element</button>
  `,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _popup_service__WEBPACK_IMPORTED_MODULE_3__["PopupService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup.component */ "./src/app/popup.component.ts");
/* harmony import */ var _popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup.service */ "./src/app/popup.service.ts");







// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
        providers: [_popup_service__WEBPACK_IMPORTED_MODULE_6__["PopupService"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/popup.component.ts":
/*!************************************!*\
  !*** ./src/app/popup.component.ts ***!
  \************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let PopupComponent = class PopupComponent {
    constructor() {
        this.state = 'closed';
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set message(message) {
        this._message = message;
        this.state = 'opened';
    }
    get message() { return this._message; }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], PopupComponent.prototype, "message", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PopupComponent.prototype, "closed", void 0);
PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-popup',
        template: `
    <span>Popup: {{message}}</span>
    <button (click)="closed.next()">&#x2716;</button>
  `,
        host: {
            '[@state]': 'state',
        },
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('state', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('opened', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void, closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(100%)', opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-in')),
            ])
        ],
        styles: ["\n    :host {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #009cff;\n      height: 48px;\n      padding: 16px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-top: 1px solid black;\n      font-size: 24px;\n    }\n\n    button {\n      border-radius: 50%;\n    }\n  "]
    })
], PopupComponent);



/***/ }),

/***/ "./src/app/popup.service.ts":
/*!**********************************!*\
  !*** ./src/app/popup.service.ts ***!
  \**********************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.component */ "./src/app/popup.component.ts");



let PopupService = class PopupService {
    constructor(injector, applicationRef, componentFactoryResolver) {
        this.injector = injector;
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    // Previous dynamic-loading method required you to set up infrastructure
    // before adding the popup to the DOM.
    showAsComponent(message) {
        // Create element
        const popup = document.createElement('popup-component');
        // Create the component and wire it up with the element
        const factory = this.componentFactoryResolver.resolveComponentFactory(_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopupComponent"]);
        const popupComponentRef = factory.create(this.injector, [], popup);
        // Attach to the view so that the change detector knows to run
        this.applicationRef.attachView(popupComponentRef.hostView);
        // Listen to the close event
        popupComponentRef.instance.closed.subscribe(() => {
            document.body.removeChild(popup);
            this.applicationRef.detachView(popupComponentRef.hostView);
        });
        // Set the message
        popupComponentRef.instance.message = message;
        // Add to the DOM
        document.body.appendChild(popup);
    }
    // This uses the new custom-element method to add the popup to the DOM.
    showAsElement(message) {
        // Create element
        const popupEl = document.createElement('popup-element');
        // Listen to the close event
        popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
        // Set the message
        popupEl.message = message;
        // Add to the DOM
        document.body.appendChild(popupEl);
    }
};
PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], PopupService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myproject\Samples-Angular\elements\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map