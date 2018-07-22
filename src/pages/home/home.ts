import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ICustomer } from "../../models/index";
import { CustomerService } from "../../sharde/customer.service";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    user: ICustomer;

    constructor(public navCtrl: NavController,
        private customerService: CustomerService) {
        const customer = this.customerService.getCustomer();
        if (!customer) {
            this.navCtrl.setRoot("LoginPage");
            this.navCtrl.popToRoot();
        }
        this.user = customer;
    }   
}
