import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController } from 'ionic-angular';

import { ICustomer } from "../../models/index";
import { CustomerService } from "../../sharde/customer.service";


@IonicPage()
@Component({
    selector: 'page-updateDetails',
    templateUrl: 'update-details.html',
})
export class UpdateDetailsPage {
    customer: ICustomer = <ICustomer>{};
    errorMessage: string;
    homePage = 'HomePage';

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private customerService: CustomerService,
        private toastController: ToastController, ) {
        const customer = this.customerService.getCustomer();
        if (!customer) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
        this.customer = customer;
    }


    updateDetails() {
        this.customerService.updateDetails(this.customer).subscribe(() => {
            let toast = this.toastController.create({
                message: 'Hi, ' + this.customer.name + ' we updated your details',
                duration: 3000,
                position: 'bottom'
            });
            toast.present().then(() =>
                this.navCtrl.setRoot('HomePage'));
            this.customer = this.customerService.getCustomer();
        }, () => {
            let toast = this.toastController.create({
                message: 'Sorry, There is an error',
                duration: 3000
            });
            toast.present();
        });
    }
}
