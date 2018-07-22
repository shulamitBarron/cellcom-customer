import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, AlertController, Nav, ToastController } from 'ionic-angular';

import { ILogin } from "../../models/index"
import { CustomerService } from "../../sharde/customer.service";

@IonicPage()
    @Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    @ViewChild(Nav) nav: Nav;
    user: ILogin = <ILogin>{};
    createCustomerPage = 'CreateCustomerPage';

    constructor(private navCtrl: NavController,
        private customerService: CustomerService,
        private toastController: ToastController,
        private alertCtrl: AlertController) {
    }

    showPrompt() {
        const prompt = this.alertCtrl.create({
            title: 'Login',
            message: "The name or the password isn't vaild",
            buttons: [
                {
                    text: 'Try Again',
                    handler: data => { }
                },
                {
                    text: 'Register',
                    handler: data =>  this.navCtrl.setRoot('CreateCustomerPage')
                }
            ]
        });
        prompt.present();
    }

    login() {
        this.customerService.login(this.user.email, this.user.password)
            .subscribe((isLogin) => {
                if (isLogin) {
                    this.navCtrl.setRoot('HomePage');
                } else {
                    this.showPrompt();
                }
            }, () => {
                let toast = this.toastController.create({
                    message: 'Sorry, there is an error',
                    duration: 3000
                });
                toast.present();
            });
    }
}
