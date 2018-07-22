webpackJsonp([1],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__login__["a" /* LoginPage */]]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sharde_customer_service__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, customerService, toastController, alertCtrl) {
        this.navCtrl = navCtrl;
        this.customerService = customerService;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.createCustomerPage = 'CreateCustomerPage';
    }
    LoginPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "The name or the password isn't vaild",
            buttons: [
                {
                    text: 'Try Again',
                    handler: function (data) { }
                },
                {
                    text: 'Register',
                    handler: function (data) { return _this.navCtrl.setRoot('CreateCustomerPage'); }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.customerService.login(this.user.email, this.user.password)
            .subscribe(function (isLogin) {
            if (isLogin) {
                _this.navCtrl.setRoot('HomePage');
            }
            else {
                _this.showPrompt();
            }
        }, function () {
            var toast = _this.toastController.create({
                message: 'Sorry, there is an error',
                duration: 3000
            });
            toast.present();
        });
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], LoginPage.prototype, "nav", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\login\login.html"*/'﻿<ion-header>\n\n  <ion-navbar>\n    <ion-title>login customer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <form \n        #form="ngForm"\n        (ngSubmit)="form.form.valid && login()">\n\n    <ion-item>\n          <ion-label floating>e-mail</ion-label>\n          <ion-input #Email="ngModel" type="email"\n                     pattern="^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"\n                     required [(ngModel)]="user.email" name="email"></ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && Email.errors && Email.errors.required" class="required">Email is required</div>\n       <div *ngIf="form.submitted && Email.errors && Email.errors.pattern" class="required">Email is not valid</div>\n           <ion-item>\n          <ion-label floating>password</ion-label>\n          <ion-input #Password="ngModel" type="password" required\n                     [(ngModel)]="user.password" name="password"></ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && !Password.valid"\n             class="required">Password is required</div>\n\n  <div padding>\n    <button ion-button block type="submit">Sign In</button>\n  </div>\n  </form>\n  <div padding>\n    <button ion-button block [navPush]="createCustomerPage">Register</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__sharde_customer_service__["a" /* CustomerService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map