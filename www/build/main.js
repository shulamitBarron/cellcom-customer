webpackJsonp([5],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_constants__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    CustomerService.prototype.getCustomer = function () {
        return this.customer;
    };
    CustomerService.prototype.login = function (email, password) {
        var _this = this;
        var customer = {
            email: email,
            password: password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/customers/checkPasswordEqualMail", customer)
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.setCustomer(data);
            return !!data;
        });
    };
    CustomerService.prototype.saveCustomer = function (customer) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/customers/addCustomers", customer)
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.setCustomer(data);
            return !!data;
        });
    };
    CustomerService.prototype.updateDetails = function (customer) {
        var _this = this;
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/customers/updateById", customer)
            .map(function (res) {
            var data = res.json();
            if (data)
                _this.setCustomer(customer);
            return !!data;
        });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], CustomerService);

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sharde_complainer_service__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatPage = (function () {
    function ChatPage(navCtrl, _zone, socketService, loadingCtrl, toastCtrl, complainerService, restAPISocket, toast) {
        this.navCtrl = navCtrl;
        this._zone = _zone;
        this.socketService = socketService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.complainerService = complainerService;
        this.restAPISocket = restAPISocket;
        this.toast = toast;
        this.messages = [];
        this.chatBox = "";
        this.btnEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.startChatBtn = true;
        this.init();
    }
    ChatPage.prototype.ionViewWillLeave = function () {
        this.complainerService.removeComplain(this.roomId);
        this.socketService.disconnect();
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        debugger;
        this.socketService.init();
        this.restAPISocket.init();
    };
    ChatPage.prototype.init = function () {
        var _this = this;
        this.socketService.messages.subscribe(function (chatMessage) {
            _this.loading.dismiss();
            _this._zone.run(function () { return _this.messages.push(chatMessage); });
            _this.scrollToBottom();
        });
        var self = this;
        // this.socketService.disabledTheIonContent.subscribe(() => {
        //     self.txtChat.ionTxtArea.disabled = true
        // });
        // this.socketService.dangerToastToUser.subscribe(() => {
        //     const toast = this.toastCtrl.create(
        //         {
        //             message: this.socketService.returnComplainerName() + ', be carefull!',
        //             duration: 4000,
        //             position: 'bottom',
        //             cssClass: "chat.scss"
        //         });
        //     toast.present();
        // });
        this.socketService.theSupporterLeftTheChat.subscribe(function () {
            self.txtChat.ionTxtArea.disabled = true;
            var toast = _this.toast.create({
                message: 'The supporter left the chat',
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
            _this.navCtrl.setRoot('HomePage');
        });
    };
    ChatPage.prototype.startChat = function () {
        this.startChatBtn = false;
        this.socketService.startChat();
        this.restAPISocket.connect();
        this.presentLoadingDefault();
    };
    ChatPage.prototype.sendMessage = function () {
        this.btnEmitter.emit("sent clicked");
        this.txtChat.setFocus();
        var message = this.txtChat.content;
        this.send(message);
        this.txtChat.clearInput();
    };
    ChatPage.prototype.send = function (message) {
        this.socketService.newRequest(message);
        this.chatBox = '';
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        this._zone.run(function () { return setTimeout(function () { return _this.content.scrollToBottom(300); }); });
    };
    ChatPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to supporter...',
            dismissOnPageChange: true,
            showBackdrop: true
        });
        this.loading.present().then(function () {
            _this.roomId = _this.socketService.getRoomId();
        });
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('txtChat'),
    __metadata("design:type", Object)
], ChatPage.prototype, "txtChat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\chat\chat.html"*/'﻿<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-buttons *ngIf="startChatBtn" right class="chat-icon">\n    <button full ion-button icon-only (click)="startChat()">\n      start chat\n      <ion-icon name="chatboxes"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-list no-lines>\n    <ion-item *ngFor="let msg of messages">\n      <chat-bubble [chatMessage]="msg"></chat-bubble>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer no-border class="chatPageFooter"\n            [keyboardAttach]="content" [btnClicked]="btnEmitter">\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-label style="margin:0px;"></ion-label>\n      <div item-content style="width:100%;">\n        <elastic-textarea #txtChat placeholder="Send a message"\n                          lineHeight="20" maxExpand="5"></elastic-textarea>\n      </div>\n    </ion-item>\n    <ion-buttons right style="margin-left:10px">\n      <button ion-button icon-only style="margin-top: -15px;"\n              [disabled]="txtChat.content.trim().length<1"\n              (click)="sendMessage()">\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_index__["b" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_index__["b" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__sharde_complainer_service__["a" /* ComplainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sharde_complainer_service__["a" /* ComplainerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__providers_index__["a" /* RestAPISocket */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_index__["a" /* RestAPISocket */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _h || Object])
], ChatPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		739,
		4
	],
	"../pages/create-customer/create-customer.module": [
		740,
		3
	],
	"../pages/home/home.module": [
		741,
		2
	],
	"../pages/login/login.module": [
		742,
		1
	],
	"../pages/update-details/update-details.module": [
		743,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 195;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_type__ = __webpack_require__(446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__message_type__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplainerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_constants__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComplainerService = (function () {
    function ComplainerService(http) {
        this.http = http;
    }
    ComplainerService.prototype.getComplainers = function () {
        return this.complainers;
    };
    ComplainerService.prototype.removeComplain = function (room) {
        this.http.delete(__WEBPACK_IMPORTED_MODULE_3__assets_constants__["a" /* CELLCOM_URL */] + "/complainers/deleteComlainerByRoom?room=" + room)
            .subscribe(function () { });
    };
    return ComplainerService;
}());
ComplainerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ComplainerService);

//# sourceMappingURL=complainer.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chatBubble_chatBubble__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_keyboard_attach_directive__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sharde_customer_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_elasticTextarea_elasticTextarea__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sharde_complainer_service__ = __webpack_require__(352);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__components_elasticTextarea_elasticTextarea__["a" /* ElasticTextarea */],
            __WEBPACK_IMPORTED_MODULE_9__components_chatBubble_chatBubble__["a" /* ChatBubble */],
            __WEBPACK_IMPORTED_MODULE_10__directives_keyboard_attach_directive__["a" /* KeyboardAttachDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageSModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-customer/create-customer.module#CreateSupportPageModule', name: 'CreateCustomerPage', segment: 'create-customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageSModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/update-details/update-details.module#UpdateDetailsPageSModule', name: 'UpdateDetailsPage', segment: 'update-details', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_chat_chat__["a" /* ChatPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__sharde_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_index__["c" /* Sql */],
            __WEBPACK_IMPORTED_MODULE_7__providers_index__["b" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_index__["a" /* RestAPISocket */],
            __WEBPACK_IMPORTED_MODULE_7__providers_index__["d" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_14__sharde_complainer_service__["a" /* ComplainerService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DB_NAME = '__mojoapp';
var win = window;
var Sql = (function () {
    function Sql(platform) {
        var _this = this;
        this.platform = platform;
        this._dbPromise = new Promise(function (resolve, reject) {
            try {
                var _db_1;
                _this.platform.ready().then(function () {
                    if (_this.platform.is('cordova') && win.sqlitePlugin) {
                        _db_1 = win.sqlitePlugin.openDatabase({
                            name: DB_NAME,
                            location: 'default'
                        });
                    }
                    else {
                        console.warn('Storage: SQLite plugin not installed, falling back to WebSQL. Make sure to install cordova-sqlite-storage in production!');
                        _db_1 = win.openDatabase(DB_NAME, '1.0', 'database', 5 * 1024 * 1024);
                    }
                    resolve(_db_1);
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
        this._tryInit();
    }
    // Initialize the DB with our required tables
    Sql.prototype._tryInit = function () {
        this.query('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)').catch(function (err) {
            console.error('Storage: Unable to create initial storage tables', err.tx, err.err);
        });
    };
    /**
     * Perform an arbitrary SQL operation on the database. Use this method
     * to have full control over the underlying database through SQL operations
     * like SELECT, INSERT, and UPDATE.
     *
     * @param {string} query the query to run
     * @param {array} params the additional params to use for query placeholders
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.query = function (query, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this._dbPromise.then(function (db) {
                    db.transaction(function (tx) {
                        tx.executeSql(query, params, function (tx, res) { return resolve({ tx: tx, res: res }); }, function (tx, err) { return reject({ tx: tx, err: err }); });
                    }, function (err) { return reject({ err: err }); });
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    /**
     * Get the value in the database identified by the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.get = function (key) {
        return this.query('select key, value from kv where key = ? limit 1', [key]).then(function (data) {
            if (data.res.rows.length > 0) {
                return data.res.rows.item(0).value;
            }
        });
    };
    /**
     * Set the value in the database for the given key. Existing values will be overwritten.
     * @param {string} key the key
     * @param {string} value The value (as a string)
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.set = function (key, value) {
        return this.query('insert or replace into kv(key, value) values (?, ?)', [key, value]);
    };
    Sql.prototype.getJson = function (key) {
        return this.get(key).then(function (value) {
            try {
                return JSON.parse(value);
            }
            catch (e) {
                throw e; // rethrowing exception so it can be handled with .catch()
            }
        });
    };
    Sql.prototype.setJson = function (key, value) {
        try {
            return this.set(key, JSON.stringify(value));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * Remove the value in the database for the given key.
     * @param {string} key the key
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.remove = function (key) {
        return this.query('delete from kv where key = ?', [key]);
    };
    /**
     * Clear all keys/values of your database.
     * @return {Promise} that resolves or rejects with an object of the form { tx: Transaction, res: Result (or err)}
     */
    Sql.prototype.clear = function () {
        return this.query('delete from kv');
    };
    return Sql;
}());
Sql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], Sql);

//# sourceMappingURL=sql.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = (function () {
    function UtilService() {
    }
    UtilService.getEpoch = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()().unix();
    };
    UtilService.getCalendarDay = function (epoch) {
        if (!epoch) {
            return null;
        }
        var timeString = 'h:mm A';
        return __WEBPACK_IMPORTED_MODULE_1_moment___default()(epoch * 1000).calendar(null, {
            sameDay: '[Today] ' + timeString,
            lastDay: '[Yesterday] ' + timeString,
            sameElse: 'MM/DD ' + timeString
        });
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilService);

//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 197,
	"./af.js": 197,
	"./ar": 198,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 198,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bn": 208,
	"./bn.js": 208,
	"./bo": 209,
	"./bo.js": 209,
	"./br": 210,
	"./br.js": 210,
	"./bs": 211,
	"./bs.js": 211,
	"./ca": 212,
	"./ca.js": 212,
	"./cs": 213,
	"./cs.js": 213,
	"./cv": 214,
	"./cv.js": 214,
	"./cy": 215,
	"./cy.js": 215,
	"./da": 216,
	"./da.js": 216,
	"./de": 217,
	"./de-at": 218,
	"./de-at.js": 218,
	"./de-ch": 219,
	"./de-ch.js": 219,
	"./de.js": 217,
	"./dv": 220,
	"./dv.js": 220,
	"./el": 221,
	"./el.js": 221,
	"./en-au": 222,
	"./en-au.js": 222,
	"./en-ca": 223,
	"./en-ca.js": 223,
	"./en-gb": 224,
	"./en-gb.js": 224,
	"./en-ie": 225,
	"./en-ie.js": 225,
	"./en-nz": 226,
	"./en-nz.js": 226,
	"./eo": 227,
	"./eo.js": 227,
	"./es": 228,
	"./es-do": 229,
	"./es-do.js": 229,
	"./es.js": 228,
	"./et": 230,
	"./et.js": 230,
	"./eu": 231,
	"./eu.js": 231,
	"./fa": 232,
	"./fa.js": 232,
	"./fi": 233,
	"./fi.js": 233,
	"./fo": 234,
	"./fo.js": 234,
	"./fr": 235,
	"./fr-ca": 236,
	"./fr-ca.js": 236,
	"./fr-ch": 237,
	"./fr-ch.js": 237,
	"./fr.js": 235,
	"./fy": 238,
	"./fy.js": 238,
	"./gd": 239,
	"./gd.js": 239,
	"./gl": 240,
	"./gl.js": 240,
	"./gom-latn": 241,
	"./gom-latn.js": 241,
	"./he": 242,
	"./he.js": 242,
	"./hi": 243,
	"./hi.js": 243,
	"./hr": 244,
	"./hr.js": 244,
	"./hu": 245,
	"./hu.js": 245,
	"./hy-am": 246,
	"./hy-am.js": 246,
	"./id": 247,
	"./id.js": 247,
	"./is": 248,
	"./is.js": 248,
	"./it": 249,
	"./it.js": 249,
	"./ja": 250,
	"./ja.js": 250,
	"./jv": 251,
	"./jv.js": 251,
	"./ka": 252,
	"./ka.js": 252,
	"./kk": 253,
	"./kk.js": 253,
	"./km": 254,
	"./km.js": 254,
	"./kn": 255,
	"./kn.js": 255,
	"./ko": 256,
	"./ko.js": 256,
	"./ky": 257,
	"./ky.js": 257,
	"./lb": 258,
	"./lb.js": 258,
	"./lo": 259,
	"./lo.js": 259,
	"./lt": 260,
	"./lt.js": 260,
	"./lv": 261,
	"./lv.js": 261,
	"./me": 262,
	"./me.js": 262,
	"./mi": 263,
	"./mi.js": 263,
	"./mk": 264,
	"./mk.js": 264,
	"./ml": 265,
	"./ml.js": 265,
	"./mr": 266,
	"./mr.js": 266,
	"./ms": 267,
	"./ms-my": 268,
	"./ms-my.js": 268,
	"./ms.js": 267,
	"./my": 269,
	"./my.js": 269,
	"./nb": 270,
	"./nb.js": 270,
	"./ne": 271,
	"./ne.js": 271,
	"./nl": 272,
	"./nl-be": 273,
	"./nl-be.js": 273,
	"./nl.js": 272,
	"./nn": 274,
	"./nn.js": 274,
	"./pa-in": 275,
	"./pa-in.js": 275,
	"./pl": 276,
	"./pl.js": 276,
	"./pt": 277,
	"./pt-br": 278,
	"./pt-br.js": 278,
	"./pt.js": 277,
	"./ro": 279,
	"./ro.js": 279,
	"./ru": 280,
	"./ru.js": 280,
	"./sd": 281,
	"./sd.js": 281,
	"./se": 282,
	"./se.js": 282,
	"./si": 283,
	"./si.js": 283,
	"./sk": 284,
	"./sk.js": 284,
	"./sl": 285,
	"./sl.js": 285,
	"./sq": 286,
	"./sq.js": 286,
	"./sr": 287,
	"./sr-cyrl": 288,
	"./sr-cyrl.js": 288,
	"./sr.js": 287,
	"./ss": 289,
	"./ss.js": 289,
	"./sv": 290,
	"./sv.js": 290,
	"./sw": 291,
	"./sw.js": 291,
	"./ta": 292,
	"./ta.js": 292,
	"./te": 293,
	"./te.js": 293,
	"./tet": 294,
	"./tet.js": 294,
	"./th": 295,
	"./th.js": 295,
	"./tl-ph": 296,
	"./tl-ph.js": 296,
	"./tlh": 297,
	"./tlh.js": 297,
	"./tr": 298,
	"./tr.js": 298,
	"./tzl": 299,
	"./tzl.js": 299,
	"./tzm": 300,
	"./tzm-latn": 301,
	"./tzm-latn.js": 301,
	"./tzm.js": 300,
	"./uk": 302,
	"./uk.js": 302,
	"./ur": 303,
	"./ur.js": 303,
	"./uz": 304,
	"./uz-latn": 305,
	"./uz-latn.js": 305,
	"./uz.js": 304,
	"./vi": 306,
	"./vi.js": 306,
	"./x-pseudo": 307,
	"./x-pseudo.js": 307,
	"./yo": 308,
	"./yo.js": 308,
	"./zh-cn": 309,
	"./zh-cn.js": 309,
	"./zh-hk": 310,
	"./zh-hk.js": 310,
	"./zh-tw": 311,
	"./zh-tw.js": 311
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 423;

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sharde_customer_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_constants__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SocketService = (function () {
    function SocketService(_customer, http) {
        var _this = this;
        this._customer = _customer;
        this.http = http;
        this.disabledTheIonContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.theSupporterLeftTheChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dangerToastToUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.complainer = this._customer.getCustomer();
        this.messages = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socketObserver = observer;
        });
        // this.init();
    }
    SocketService.prototype.saveComplainerInDb = function () {
        this.complainer.roomId = this.room;
        this.http.post(__WEBPACK_IMPORTED_MODULE_7__assets_constants__["a" /* CELLCOM_URL */] + "/complainers/addComplainer", this.complainer)
            .subscribe(function () { });
    };
    SocketService.prototype.init = function () {
        var _this = this;
        debugger;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(__WEBPACK_IMPORTED_MODULE_7__assets_constants__["b" /* SOCKET_HOST */]);
        this.socket.on("connect", function (data) {
            _this.room = Math.round((Math.random() * 1000000)).toString();
        });
        this.socket.on('tooManyUnPermissionWords', function () {
            _this.disabledTheIonContent.emit();
        });
        this.socket.on('UserUsedUnPermissionWord', function () {
            _this.dangerToastToUser.emit();
        });
        this.socket.on('leave', function (data) {
            _this.theSupporterLeftTheChat.emit();
        });
        this.socket.on('disconnect', function (data) {
            debugger;
        });
        this.socket.on('startChat', function (data) {
            debugger;
        });
        this.socket.on('peopleinchat', function (data) {
            debugger;
            if (data.number === 0) {
                // call the server-side function 'login' and send user's parameters
                _this.socket.emit('login', {
                    user: _this.complainer.name,
                    avatar: _this.complainer.email,
                    id: _this.room
                });
            }
            else if (data.number === 1) {
                debugger;
            }
        });
        this.socket.on('receive', function (response) {
            debugger;
            var chatMessage = response;
            if (typeof response === 'string') {
                chatMessage = {
                    type: __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* MessageType */].MSG_RES,
                    from: _this.from,
                    room: _this.socket.id,
                    message: response
                };
            }
            else {
                chatMessage.type = __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* MessageType */].MSG_RES;
            }
            chatMessage.epoch = __WEBPACK_IMPORTED_MODULE_4__index__["d" /* UtilService */].getEpoch();
            _this.socketObserver.next(chatMessage);
        });
    };
    SocketService.prototype.getComplainerData = function () {
        this.from = this.complainer.name.toString();
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.connect = function () {
        this.socket.connect();
        this.getComplainerData();
    };
    SocketService.prototype.leave = function () {
        //this.socket.leave();
    };
    SocketService.prototype.tooManyUnPermissionWords = function () {
        this.tooManyUnPermissionWords();
    };
    SocketService.prototype.UserUsedUnPermissionWord = function () {
        this.UserUsedUnPermissionWord();
    };
    SocketService.prototype.newRequest = function (message) {
        var chatMessage = {
            type: __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* MessageType */].MSG_REQ,
            message: message,
            room: this.room,
            from: this.from,
            epoch: __WEBPACK_IMPORTED_MODULE_4__index__["d" /* UtilService */].getEpoch()
        };
        this.socket.emit('msg', chatMessage);
        this.socketObserver.next(chatMessage);
    };
    SocketService.prototype.startChat = function () {
        this.saveComplainerInDb();
        // this.connect();
        this.socket.emit('load', this.room);
    };
    SocketService.prototype.getRoomId = function () {
        return this.room;
    };
    SocketService.prototype.returnComplainerName = function () {
        return this.complainer.name.toString();
    };
    SocketService.prototype.addToRoom = function (roomId) {
        this.room = roomId;
        this.connect();
        return this.room;
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__sharde_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__sharde_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], SocketService);

var _a, _b;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageType; });
var MessageType = (function () {
    function MessageType() {
    }
    return MessageType;
}());

MessageType.MSG_REQ = "message_request";
MessageType.MSG_RES = "message_response";
//# sourceMappingURL=message-type.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sql__ = __webpack_require__(421);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__sql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_service__ = __webpack_require__(422);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__(424);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__socket_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restAPISocket_service__ = __webpack_require__(714);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__restAPISocket_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestAPISocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_constants__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestAPISocket = (function () {
    function RestAPISocket() {
    }
    RestAPISocket.prototype.init = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_1__assets_constants__["a" /* CELLCOM_URL */], { autoConnect: false });
        this.socket.on("connect", function () {
            _this.socket.emit("add");
        });
        this.socket.on('connectSupporter', function () { });
        this.socket.on('complainerAdded', function () {
        });
    };
    RestAPISocket.prototype.connect = function () {
        this.socket.connect();
    };
    RestAPISocket.prototype.complainerAdded = function () {
        this.complainerAdded();
    };
    return RestAPISocket;
}());
RestAPISocket = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RestAPISocket);

//# sourceMappingURL=restAPISocket.service.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_index__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatBubble = (function () {
    function ChatBubble(socketService) {
        this.socketService = socketService;
        this.messageType = __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* MessageType */];
    }
    ChatBubble.prototype.isFromMe = function () {
        return this.chatMessage.from == this.socketService.from;
    };
    ChatBubble.prototype.formatEpoch = function (epoch) {
        return __WEBPACK_IMPORTED_MODULE_1__providers_index__["d" /* UtilService */].getCalendarDay(epoch);
    };
    return ChatBubble;
}());
ChatBubble = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'chat-bubble',
        inputs: ['chatMessage'],template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\components\chatBubble\chatBubble.html"*/'<div>\n  <div class="chat-bubble {{isFromMe() ? \'left\' : \'right\'}}">\n    <div class="message">{{chatMessage.message}}</div>\n    <div class="message-detail" style="float:right">\n      <span>{{chatMessage.from}}</span>\n      <br/>\n      <span>{{formatEpoch(chatMessage.epoch)}}</span>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\components\chatBubble\chatBubble.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_index__["b" /* SocketService */]])
], ChatBubble);

//# sourceMappingURL=chatBubble.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, _zone, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this._zone = _zone;
        this.platform = platform;
        this.shouldHide = true;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function (e) { return _this.onHide(e); });
        }
        this.btnClicked.subscribe(function (data) { return _this.shouldHide = false; }, function (err) { return console.log(err); });
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function (e) {
        if (this.shouldHide) {
            this.setElementPosition(0);
        }
        this.shouldHide = true;
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        var _this = this;
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
        this._zone.run(function () {
            setTimeout(function () {
                _this.content.scrollToBottom(300);
            }, 100);
        });
    };
    return KeyboardAttachDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Content */])
], KeyboardAttachDirective.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], KeyboardAttachDirective.prototype, "btnClicked", void 0);
KeyboardAttachDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[keyboardAttach]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */]])
], KeyboardAttachDirective);

//# sourceMappingURL=keyboard-attach.directive.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        this.pages = [
            { ios: 'home', md: 'home', title: 'Home', component: 'HomePage' },
            { ios: 'chatbubbles', md: 'chatbubbles', title: 'UpdateDetails', component: 'UpdateDetailsPage' },
            { ios: 'chatbubbles', md: 'chatbubbles', title: 'Contact your representative', component: __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\app\app.html"*/'﻿<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon ios="ios-{{p.ios}}" md="md-{{p.md}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticTextarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticTextarea = (function () {
    function ElasticTextarea() {
        this.content = "";
        this.lineHeight = 20;
        this.maxExpand = 5;
        this.maxHeight = this.lineHeight * this.maxExpand;
    }
    ElasticTextarea.prototype.ngAfterViewInit = function () {
        this.txtArea = this.ionTxtArea._elementRef.nativeElement.children[0];
        this.txtArea.style.height = this.lineHeight + "px";
        this.maxHeight = this.lineHeight * this.maxExpand;
        this.txtArea.style.resize = 'none';
    };
    ElasticTextarea.prototype.onChange = function () {
        this.txtArea.style.height = this.lineHeight + "px";
        if (this.txtArea.scrollHeight < this.maxHeight) {
            this.txtArea.style.height = this.txtArea.scrollHeight + "px";
        }
        else {
            this.txtArea.style.height = this.maxHeight + "px";
        }
    };
    ElasticTextarea.prototype.clearInput = function () {
        this.content = "";
        this.txtArea.style.height = this.lineHeight + "px";
    };
    ElasticTextarea.prototype.setFocus = function () {
        this.ionTxtArea.setFocus();
    };
    return ElasticTextarea;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ionTxtArea'),
    __metadata("design:type", Object)
], ElasticTextarea.prototype, "ionTxtArea", void 0);
ElasticTextarea = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'elastic-textarea',
        inputs: ['placeholder', 'lineHeight', 'maxExpand'],template:/*ion-inline-start:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\components\elasticTextarea\elasticTextarea.html"*/'<!--suppress ALL -->\n<ion-textarea #ionTxtArea\n              placeholder=\'{{placeholder}}\'\n              [(ngModel)]="content"\n              (ngModelChange)=\'onChange($event)\'>\n</ion-textarea>\n'/*ion-inline-end:"C:\Users\barrons\Downloads\cellcom-customer-master\cellcom-customer-master\src\components\elasticTextarea\elasticTextarea.html"*/
    }),
    __metadata("design:paramtypes", [])
], ElasticTextarea);

//# sourceMappingURL=elasticTextarea.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SOCKET_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CELLCOM_URL; });
var SOCKET_HOST = "https://cellcom-chat-service.herokuapp.com";
var CELLCOM_URL = "https://cellcom-service.herokuapp.com";
//# sourceMappingURL=constants.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map