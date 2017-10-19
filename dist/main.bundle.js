webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n  <mat-grid-tile>\r\n    <div id=\"container_id\"></div>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    <monaco-editor ></monaco-editor>\r\n  </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_orbitcontrols_ts__ = __webpack_require__("../../../../three-orbitcontrols-ts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_orbitcontrols_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three_orbitcontrols_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hexenginets__ = __webpack_require__("../../../../hexenginets/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hexenginets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hexenginets__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.code = 'function x() {\nconsole.log("Hello world!");\n}';
        this.language = 'typescript';
        this.engine = new __WEBPACK_IMPORTED_MODULE_2_hexenginets__["Engine"]();
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        var scene = new __WEBPACK_IMPORTED_MODULE_2_hexenginets__["Scene"]({
            title: 'scene01',
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            gridConfig: {
                cellSize: 4
            }
        });
        var sceneSettings = {
            element: document.body,
            alpha: true,
            antialias: true,
            clearColor: '#fff',
            sortObjects: false,
            fog: null,
            light: new __WEBPACK_IMPORTED_MODULE_3_three__["DirectionalLight"](0xffffff),
            lightPosition: null,
            cameraType: 'PerspectiveCamera',
            cameraPosition: null,
            orthoZoom: 4
        };
        if (!sceneSettings.lightPosition) {
            sceneSettings.light.position.set(-1, 1, -1).normalize();
        }
        scene.camera.position.y = 50;
        scene.camera.position.z = 200;
        var controls = new __WEBPACK_IMPORTED_MODULE_1_three_orbitcontrols_ts__["OrbitControls"](scene.camera, scene.container.domElement);
        scene.container.add(sceneSettings.light);
        scene.container.add(new __WEBPACK_IMPORTED_MODULE_3_three__["AmbientLight"](0xdddddd));
        controls.enableZoom = true;
        // How far you can orbit vertically, upper and lower limits.
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI;
        // How far you can dolly in and out ( PerspectiveCamera only )
        controls.minDistance = 0;
        controls.maxDistance = Infinity;
        this.engine.init({
            containerId: 'container_id',
            width: window.innerWidth,
            height: window.innerHeight,
            renderSettings: {
                alpha: sceneSettings.alpha,
                antialias: sceneSettings.antialias
            }
        });
        this.engine.addScene('scence01', scene);
        this.engine.resumeScene();
        scene.renderer.setClearColor('#fff', 0);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map