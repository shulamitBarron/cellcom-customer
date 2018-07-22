webpackJsonp([3],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSupportPageModule", function() { return CreateSupportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_customer__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateSupportPageModule = (function () {
    function CreateSupportPageModule() {
    }
    return CreateSupportPageModule;
}());
CreateSupportPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__create_customer__["a" /* CreateCustomerPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_customer__["a" /* CreateCustomerPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__create_customer__["a" /* CreateCustomerPage */]]
    })
], CreateSupportPageModule);

//# sourceMappingURL=create-customer.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCustomerPage; });
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



var CreateCustomerPage = (function () {
    function CreateCustomerPage(navCtrl, navParams, toastController, _customerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this._customerService = _customerService;
        this.customer = {};
    }
    CreateCustomerPage.prototype.saveDetails = function () {
        var _this = this;
        this._customerService.saveCustomer(this.customer).subscribe(function () {
            var toast = _this.toastController.create({
                message: 'Hi, ' + _this.customer.name + ' we save your details',
                duration: 3000,
                position: 'bottom'
            });
            toast.present().then(function () {
                return _this.navCtrl.setRoot('HomePage');
            });
        }, function (error) {
            var toast = _this.toastController.create({
                message: 'Sorry, there is an error',
                duration: 3000
            });
            toast.present();
        });
    };
    return CreateCustomerPage;
}());
CreateCustomerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-customer',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\create-customer\create-customer.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <ion-title>Create Customer</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <form #form="ngForm" (ngSubmit)="form.form.valid && saveDetails()">\n               <ion-item>\n          <ion-label floating>name</ion-label>\n          <ion-input #Name="ngModel" \n                     type="text"\n                     required [(ngModel)]="customer.name" \n                     name="name">\n          </ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && !Name.valid"\n             class="required">Name is required</div>\n        <ion-item>\n          <ion-label floating>e-mail</ion-label>\n          <ion-input #Email="ngModel" type="email"\n                     pattern="^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"\n                     required \n                     [(ngModel)]="customer.email" \n                     name="email">\n          </ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && Email.errors && Email.errors.required" class="required">Email is required</div>\n       <div *ngIf="form.submitted && Email.errors && Email.errors.pattern" class="required">Email is not valid</div>\n         <ion-item>\n          <ion-label floating>password</ion-label>\n          <ion-input #Password="ngModel" type="password" required\n                     [(ngModel)]="customer.password" name="password"></ion-input>\n        </ion-item>\n        <div *ngIf="form.submitted && !Password.valid"\n             class="required">Password is required</div>\n      \n        <ion-item>\n          <ion-label floating>phone</ion-label>\n          <ion-input #telephone="ngModel" type="text" required pattern="^[+0-9][0-9\-]*$" \n                     [(ngModel)]="customer.phone" name="phone"></ion-input>\n        </ion-item>\n  <div *ngIf="telephone.errors && telephone.errors.pattern" class="required">Phone is not valid</div>\n      <div *ngIf="form.submitted && !telephone.value" class="required">Phone Number is required</div>\n        <ion-item>\n          <ion-label floating>address</ion-label>\n          <ion-input #Address="ngModel" type="text" required\n                     [(ngModel)]="customer.address" name="address"></ion-input>\n        </ion-item>\n <div *ngIf="form.submitted && !Address.valid" class="required">Address is required</div>\n   \n     \n\n        <button ion-button type="submit" block>SAVE</button>\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\create-customer\create-customer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__sharde_customer_service__["a" /* CustomerService */]])
], CreateCustomerPage);

//# sourceMappingURL=create-customer.js.map

/***/ })

});
//# sourceMappingURL=3.js.map