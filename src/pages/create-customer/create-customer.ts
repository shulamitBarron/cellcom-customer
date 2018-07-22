import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController } from 'ionic-angular';

import { CustomerService } from "../../sharde/customer.service";
import { ICustomer } from "../../models/index";

@IonicPage()
@Component({
  selector: 'page-create-customer',
  templateUrl: 'create-customer.html',
})
export class CreateCustomerPage {
    customer: ICustomer = <ICustomer>{};

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private toastController: ToastController,
        private _customerService: CustomerService) {
  }

  saveDetails() {
      this._customerService.saveCustomer(this.customer).subscribe(() => { 
          let toast = this.toastController.create({
          message: 'Hi, ' + this.customer.name +  ' we save your details',
          duration: 3000,
          position: 'bottom'
      });
      toast.present().then(()=>
      this.navCtrl.setRoot('HomePage'))       
      }
      ,error=> {
      let toast = this.toastController.create({
          message: 'Sorry, there is an error',
          duration: 3000
      });
      toast.present();
      });
  }
}
