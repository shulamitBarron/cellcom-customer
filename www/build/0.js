webpackJsonp([0],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDetailsPageSModule", function() { return UpdateDetailsPageSModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_details__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateDetailsPageSModule = (function () {
    function UpdateDetailsPageSModule() {
    }
    return UpdateDetailsPageSModule;
}());
UpdateDetailsPageSModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__update_details__["a" /* UpdateDetailsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__update_details__["a" /* UpdateDetailsPage */])],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__update_details__["a" /* UpdateDetailsPage */]]
    })
], UpdateDetailsPageSModule);

//# sourceMappingURL=update-details.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateDetailsPage; });
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



var UpdateDetailsPage = (function () {
    function UpdateDetailsPage(navCtrl, navParams, customerService, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerService = customerService;
        this.toastController = toastController;
        this.customer = {};
        this.homePage = 'HomePage';
        var customer = this.customerService.getCustomer();
        if (!customer) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
        this.customer = customer;
    }
    UpdateDetailsPage.prototype.updateDetails = function () {
        var _this = this;
        this.customerService.updateDetails(this.customer).subscribe(function () {
            var toast = _this.toastController.create({
                message: 'Hi, ' + _this.customer.name + ' we updated your details',
                duration: 3000,
                position: 'bottom'
            });
            toast.present().then(function () {
                return _this.navCtrl.setRoot('HomePage');
            });
            _this.customer = _this.customerService.getCustomer();
        }, function () {
            var toast = _this.toastController.create({
                message: 'Sorry, There is an error',
                duration: 3000
            });
            toast.present();
        });
    };
    return UpdateDetailsPage;
}());
UpdateDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-updateDetails',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\update-details\update-details.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Update-Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h3>update-details</h3>\n  <form #form="ngForm" (ngSubmit)="form.form.valid && updateDetails()" novalidate>\n      <ion-item>\n      <ion-label floating>name</ion-label>\n      <ion-input #Name="ngModel" type="text" required \n                 [(ngModel)]="customer.name" name="name"></ion-input>\n    </ion-item>\n     <div *ngIf="form.submitted && !Name.valid"\n             class="required">Name is required</div>\n    <ion-item>\n      <ion-label floating>e-mail</ion-label>\n      <ion-input #Email="ngModel" type="email" required \n                 pattern="^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"           \n                 [(ngModel)]="customer.email" name="email"></ion-input>\n    </ion-item>\n      <div *ngIf="form.submitted && Email.errors && Email.errors.required" class="required">Email is required</div>\n       <div *ngIf="form.submitted && Email.errors && Email.errors.pattern" class="required">Email is not valid</div>\n    <ion-item>\n      <ion-label floating>phone</ion-label>\n      <ion-input #telephone="ngModel" type="text" required pattern="^[+0-9][0-9\-]*$" \n                 [(ngModel)]="customer.phone" name="phone"></ion-input>\n    </ion-item>\n    <div *ngIf="telephone.errors && telephone.errors.pattern" class="required">Phone is not valid</div>\n      <div *ngIf="form.submitted && !telephone.value" class="required">Phone Number is required</div>\n    <ion-item>\n      <ion-label floating>address</ion-label>\n      <ion-input type="text" #Address="ngModel"  required \n                 [(ngModel)]="customer.address" name="address"></ion-input>\n    </ion-item>\n    <div *ngIf="form.submitted && !Address.valid" class="required">Address is required</div>\n    <button ion-button type="submit" block>SAVE</button>\n  </form>\n    <button ion-button [navPush]="homePage" block>CANCEL</button>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\update-details\update-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__sharde_customer_service__["a" /* CustomerService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], UpdateDetailsPage);

//# sourceMappingURL=update-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map