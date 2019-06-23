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

/***/ "./node_modules/raw-loader/index.js!./src/app/alert/alert.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/alert/alert.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\t.alert{\n\t\tpadding:0;\n\t\tmargin:0;\n\t\tborder:none;\n\t}\n</style>\n<div *ngIf = \"product.price < 700\" class = \"alert\">\n\t<img (click) = \"alertClickFromSon()\" title = \"Thông báo\" src = \"../../assets/img/thongbao.png\" style = \"width: 28px;position:absolute;right:20px\"/>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-footer/app-footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-footer/app-footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n</style>\n<div class = \"app-footer\" style = \"text-align:center;min-height: 40vh;\n\tbackground-Image: -webkit-linear-gradient(0deg, #287bc6 0%, #b0e9f9 100%);\n\tfloat:left;width:100%;line-height: 40vh;\n    font-weight: bold;\n\t\">\n\t<p>\n\t\n\t\t<i class=\"far fa-copyright\"></i>Xtech Copyright\n\t\n\t</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset = \"utf-8\">\n\t\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n\t\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n\t</head>\n\t<body>\n\t\n\t\t<app-top-app></app-top-app>\n\t\t<div class = \"col-12\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t\t<app-app-footer></app-app-footer>\n\t</body>\n\t\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\tp{\n\t\tfont-size:13px;\n\t\tfont-weight:bold;\n\t}\n\t.alert img{\n\t\tposition:absolute;\n\t\tright:0\n\t}\n\t.innerForm{\n\t\twidth: 50%;\n\t\tmargin: auto;\n\t\tborder: 1px solid #ccc;\n\t\tpadding: 15px;\n\t\tmargin-bottom: 15px;\n\t\tborder-radius: 6px;\n\t}\n</style>\n<div>\n\t<h2 style = \"float: left;width: 100%;\">Your cart</h2>\n\t<a [routerLink] = \"['/shipping']\" style = \"\">Shipping prices</a>\n\n\t<div *ngFor = \"let item of items\">\n\t\t<div class = \"col-md-3\" style = \"float:left;padding:15px;position:relative\" >\n\t\t\t<!--<div class = \"alert\">\n\t\t\t\t<img src = \"../../assets/img/thongbao.png\" style = \"width: 28px;\"/>\n\t\t\t</div>-->\n\t\t\t<div style = \"width: 70%;text-align: left; margin: auto;\">\n\t\t\t\t<img src = \"{{ item.imgUrl }}\" style = \"width: 100%;height: 248px;\"/>\n\t\t\t\t<!--<p style = \"margin: 15px 0;font-size: 16px;font-weight: 600;\">-->\n\t\t\t\t\n\t\t\t\t\t<p>Name : {{ item.name }}</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\n\t\t\t\t\t\tPrice : {{ item.price | currency }}\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>DesCription : {{ item.description }}</p>\n\t\t\t\t\t\n\t\t\t\t<!--</p>-->\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class = \"formCustomer\" style = \"float:left;width:100%\">\n\t\t<div class = \"innerForm\" style = \"width:50%;margin:auto;    margin-bottom: 15px !important;\">\n\t\t\t<p style = \" font-weight: bold;\n    font-size: 20px;\n    border-bottom: 1px solid #ccc;\n    color: #e08715;\">Xác nhận mua hàng</p>\n\t\t\t<form [formGroup] = \"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\" >\n\t\t\t\t<div class = \"form-group\">\n\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t<input placeholder = \"Enter your name\" class = \"form-control\" type = \"text\" formControlName = \"name\">\n\t\t\t\t</div>\n\t\t\t\t<div class = \"form-group\"> \n\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t<input placeholder = \"Enter your address\" class= \"form-control\"type = \"text\" formControlName = \"address\">\n\t\t\t\t</div>\n\t\t\t\t<div class = \"form-group\"> \n\t\t\t\t\t<label>Phone Number</label>\n\t\t\t\t\t<input placeholder = \"Enter your phone number\" class= \"form-control\"type = \"text\" formControlName = \"phoneNumber\">\n\t\t\t\t</div>\n\t\t\t\t<button [disabled] = \"items === null\" class = \"btn btn-success\" type = \"submit\">Mua hàng</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Error 404</h3>\n<a [routerLink] = \"['']\">Trở về trang chủ</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-details/product-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\tp{\n\t\tfont-size:13px;\n\t\tfont-weight:bold;\n\t}\n\t.alert img{\n\t\tposition:absolute;\n\t\tright:0\n\t}\n\t\n</style>\n<div class = \"col-md-3\" style = \"float:left;padding:15px;position:relative\" >\n\t<!--<div class = \"alert\">\n\t\t<img src = \"../../assets/img/thongbao.png\" style = \"width: 28px;\"/>\n\t</div>-->\n\t<div style = \"width: 70%;text-align: left; margin: auto;\">\n\t\t<img src = \"{{ product.imgUrl }}\" style = \"width: 100%;height: 248px;\"/>\n\t\t<!--<p style = \"margin: 15px 0;font-size: 16px;font-weight: 600;\">-->\n\t\t\n\t\t\t<p>Name : {{ name }}</p>\n\t\t\t<p>Price : {{ price | currency }}</p>\n\t\t\t<p>DesCription : {{ description }}</p>\n\t\t\t\n\t\t<!--</p>-->\n\t</div>\n\t\n\t<div class=\"col text-center\">\n\t\t<button type = \"button\" class = \"btn btn-default\" style = \"margin-right: 10px;\" (click) = \"addToCart(product)\">Thêm vào giỏ hàng</button>\n\t\t<button type = \"button\" class = \"btn btn-success\">Mua ngay</button>\n\t</div>\n\t\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\t.app-products-list{\n\t\tfloat:right;\n\t\twidth:100%;\n\t}\n\t.detail-product:hover{\n\t\tbox-shadow: 5px 10px 18px #888888;\n\t\t\n\t}\n\t.detail-product{\n\t\tpadding:15px;\n\t}\n\t.detail-product p{\n\t\tfont-size: 13px;\n\t\tfont-weight: bold;\n\t}\n\t\n</style>\n<a [routerLink] = \"['']\" class = \"app-products-list\" style =\"padding:15px\">\n\n\t\t<div *ngFor = \"let product of products; index as productId\" style = \"position:relative\">\n\t\t\n\t\t\t<div class = \"col-md-3 detail-product\">\n\t\t\t\t<!--\n\t\t\t\t\t<div class = \"alert\">\n\t\t\t\t\t\t<img title = \"Thông báo\" src = \"../../assets/img/thongbao.png\" style = \"width: 28px;position:absolute;right:20px\"/>\n\t\t\t\t\t</div>\n\t\t\t\t-->\n\t\t\t\t<app-alert [product] = \"product\" (alertClick) = \"alertClickFromRoot()\"></app-alert>\n\t\t\t\t<div style = \"width: 70%;text-align: left; margin: auto;\">\n\t\t\t\t\t<a [routerLink]=\"['/products', productId]\" style = \"\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<img src = \"{{ product.imgUrl }}\" style = \"width: 100%;height: 248px;\"/>\n\t\t\t\t\t\t\t<!--<p style = \"margin: 15px 0;font-size: 16px;font-weight: 600;\">--->\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>Name : {{ product.name }}</p>\n\t\t\t\t\t\t\t\t<p>Price : {{ product.price | currency }}</p>\n\t\t\t\t\t\t\t\t<p>Description : {{ product.description }}</p>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<!--</p>-->\n\t\t\t\t\t\t\n\t\t\t\t\t</a>\n\t\t\t\t\t<button type = \"button\" class = \"btn btn-success\" (click) = \"addToListCart(product)\">Mua ngay</button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shipping/shipping.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\t\n</style>\n<div *ngFor = \"let item of dataFromCartService | async\">\n\t<div class = \"col-md-4\">\n\t\t<h3>Type Shipping: {{ item.type }}</h3>\n\t\t<p>Price : {{ item.price }}<p>\n\t\t<button class = \"btn btn-success\" type = \"button\">Acept</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-app/top-app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-app/top-app.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"top-app\">\n\t<div class = \"left-nav\">\n\t\t<a [routerLink] = \"['']\"><i class=\"fab fa-app-store\"></i></a>\n\t\t<h3>\n\t\t\tApp\n\t\t</h3>\n\t</div>\n\t<div class = \"right-nav\">\n\t\t<a *ngIf = \"items !== null\" [routerLink] = \"['cart']\" ><i class=\"fas fa-shopping-cart\" title = \"Xem giỏ hàng\"></i></a>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.alertClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.alertClickFromSon = function () {
        this.alertClick.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "alertClick", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app-footer/app-footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.ts ***!
  \****************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-footer',
            template: __webpack_require__(/*! raw-loader!./app-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/app-footer/app-footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");








var routes = [
    { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'products/:productId', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
    { path: 'shipping', component: _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_7__["ShippingComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'StoryApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_app_top_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-app/top-app.component */ "./src/app/top-app/top-app.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-footer/app-footer.component */ "./src/app/app-footer/app-footer.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _cartService_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cartService/cart.service */ "./src/app/cartService/cart.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



//import { Routes , RouterModule } from '@angular/router';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _top_app_top_app_component__WEBPACK_IMPORTED_MODULE_5__["TopAppComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__["AppFooterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_14__["ShippingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            ],
            providers: [_cartService_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"]],
            //providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cartService_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cartService/cart.service */ "./src/app/cartService/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.items = this.cartService.getToCart();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: '',
            phoneNumber: ''
        });
    };
    CartComponent.prototype.onSubmit = function (customerData) {
        console.warn('Your order has been submitted', customerData);
        alert("Đặt hàng thành công");
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cartService_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cartService/cart.service.ts":
/*!*********************************************!*\
  !*** ./src/app/cartService/cart.service.ts ***!
  \*********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.items = [];
    }
    //constructor(){};
    CartService.prototype.ngOnInit = function () {
    };
    CartService.prototype.addToCart = function (product) {
        this.items.push(product);
    };
    CartService.prototype.getToCart = function () {
        return this.items;
    };
    CartService.prototype.clearCart = function () {
        return this.items = [];
    };
    CartService.prototype.getShippingPrices = function () {
        return this.http.get('/assets/shipping.json');
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        //providedIn: 'root'
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cartService_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cartService/cart.service */ "./src/app/cartService/cart.service.ts");



//import { ActivatedRoute, ParamMap} from '@angular/router'


var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
        this.name = '';
        this.description = '';
        this.price = '';
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('productId');
            _this.product = _products__WEBPACK_IMPORTED_MODULE_2__["products"][id];
            _this.name = _this.product.name;
            _this.price = _this.product.price;
            _this.description = _this.product.description;
            console.log(_this.product);
            console.log(id);
        });
    };
    ProductDetailsComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
        alert('product has been added cart');
        console.log(product);
        //console.log(this.cartService.items);
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _cartService_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/app/products.ts");
/* harmony import */ var _cartService_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cartService/cart.service */ "./src/app/cartService/cart.service.ts");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(cartService) {
        this.cartService = cartService;
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
    }
    //constructor(){};
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.alertClickFromRoot = function () {
        alert('Sản phẩm đang được giảm giá 30%');
    };
    ProductListComponent.prototype.addToListCart = function (product) {
        this.cartService.addToCart(product);
        alert('product has been added cart');
        console.log(product);
        console.log(this.cartService.items);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cartService_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products.ts":
/*!*****************************!*\
  !*** ./src/app/products.ts ***!
  \*****************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [
    {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417455'
    },
    {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        imgUrl: 'https://eg.jumia.is/p0efsQA_mCBi6NO4riiUMnpHiis=/fit-in/500x500/filters:fill(white)/product/92/98924/1.jpg?0597'
    },
    {
        name: 'Phone Standard',
        price: 299,
        description: 'Phone and Laptop Beautiful',
        imgUrl: 'https://www.att.com/shopcms/media/att/2016/shop/360s/devices/8040288/6482a-2.jpg'
    },
    {
        name: 'Phone Standard',
        price: 299,
        description: 'Phone and Laptop Beautiful',
        imgUrl: 'https://www.att.com/shopcms/media/att/2016/shop/360s/devices/8040288/6482a-2.jpg'
    }
];


/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBwaW5nL3NoaXBwaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cartService_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cartService/cart.service */ "./src/app/cartService/cart.service.ts");



var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(cartService) {
        this.cartService = cartService;
    }
    ShippingComponent.prototype.ngOnInit = function () {
        this.dataFromCartService = this.cartService.getShippingPrices();
    };
    ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/raw-loader/index.js!./src/app/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cartService_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/top-app/top-app.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-app/top-app.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-nav{\r\n\tfloat:left;\r\n\theight:100%;\r\n\tpadding:0 15px;\r\n}\r\n.left-nav i {\r\n\tfont-size: 45px;\r\n\tfloat:left;\r\n\tline-height:62px;\r\n\tcolor: #17d2a6;\r\n\t\r\n}\r\n.left-nav h3{\r\n\tfloat:left;\r\n\tfont-size: 26px;\r\n    margin: 0;\r\n    line-height: 62px;\r\n\tpadding: 0 15px;\r\n\ttext-shadow: 1px 3px 4px rgb(198, 185, 217);\r\n\tcolor:#fff;\r\n}\r\n.right-nav{\r\n\tfloat:right;\r\n\theight:100%;\r\n\tpadding:0 15px;\r\n}\r\n.right-nav i{\r\n\tfont-size: 40px;\r\n\tfloat:right;\r\n\tline-height:62px;\r\n\tcolor: #fff;\r\n\t\r\n}\r\n.top-app{\r\n\tfloat:left;\r\n\twidth:100%;\r\n\tbackground-color: #2c7fab;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWFwcC90b3AtYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsY0FBYzs7QUFFZjtBQUNBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0NBQ3BCLGVBQWU7Q0FDZiwyQ0FBMkM7Q0FDM0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsV0FBVzs7QUFFWjtBQUNBO0NBQ0MsVUFBVTtDQUNWLFVBQVU7Q0FDVix5QkFBeUI7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC90b3AtYXBwL3RvcC1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LW5hdntcclxuXHRmbG9hdDpsZWZ0O1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdHBhZGRpbmc6MCAxNXB4O1xyXG59XHJcbi5sZWZ0LW5hdiBpIHtcclxuXHRmb250LXNpemU6IDQ1cHg7XHJcblx0ZmxvYXQ6bGVmdDtcclxuXHRsaW5lLWhlaWdodDo2MnB4O1xyXG5cdGNvbG9yOiAjMTdkMmE2O1xyXG5cdFxyXG59XHJcbi5sZWZ0LW5hdiBoM3tcclxuXHRmbG9hdDpsZWZ0O1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xyXG5cdHBhZGRpbmc6IDAgMTVweDtcclxuXHR0ZXh0LXNoYWRvdzogMXB4IDNweCA0cHggcmdiKDE5OCwgMTg1LCAyMTcpO1xyXG5cdGNvbG9yOiNmZmY7XHJcbn1cclxuLnJpZ2h0LW5hdntcclxuXHRmbG9hdDpyaWdodDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRwYWRkaW5nOjAgMTVweDtcclxufVxyXG4ucmlnaHQtbmF2IGl7XHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdGZsb2F0OnJpZ2h0O1xyXG5cdGxpbmUtaGVpZ2h0OjYycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0XHJcbn1cclxuLnRvcC1hcHB7XHJcblx0ZmxvYXQ6bGVmdDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyYzdmYWI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/top-app/top-app.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-app/top-app.component.ts ***!
  \**********************************************/
/*! exports provided: TopAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopAppComponent", function() { return TopAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cartService_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cartService/cart.service */ "./src/app/cartService/cart.service.ts");



var TopAppComponent = /** @class */ (function () {
    function TopAppComponent(cartService) {
        this.cartService = cartService;
        this.items = this.cartService.getToCart();
    }
    TopAppComponent.prototype.ngOnInit = function () {
    };
    TopAppComponent.prototype.redirectToCart = function () {
    };
    TopAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-app',
            template: __webpack_require__(/*! raw-loader!./top-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-app/top-app.component.html"),
            styles: [__webpack_require__(/*! ./top-app.component.css */ "./src/app/top-app/top-app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cartService_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], TopAppComponent);
    return TopAppComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Henry\Desktop\Story\StoryApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map