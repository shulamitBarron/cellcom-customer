import { Http } from "@angular/http"
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";

import { CELLCOM_URL } from "../assets/constants";
import { ILogin, ICustomer } from "../models/index";

@Injectable()
export class CustomerService {
    customer: ICustomer;

    constructor(public http: Http) { }

    setCustomer(customer: ICustomer) {
        this.customer = customer;
    }

    getCustomer(): ICustomer {
        return this.customer;
    }

    login(email: string, password: string): Observable<boolean> {
        const customer: ILogin = {
            email: email,
            password: password
        };
        return this.http.post(CELLCOM_URL + "/customers/checkPasswordEqualMail", customer)
            .map(res => {
                const data = res.json();
                if (data)
                    this.setCustomer(data);
                return !!data;
            });
    }

    saveCustomer(customer: ICustomer): Observable<boolean> {
        return this.http.post(CELLCOM_URL + "/customers/addCustomers", customer)
            .map(res => {
                const data = res.json();
                if (data)
                    this.setCustomer(data);
                return !!data;
            })
    }

    updateDetails(customer: ICustomer): Observable<boolean> {
        return this.http.put(CELLCOM_URL + "/customers/updateById", customer)
            .map(res => {
                const data = res.json();
                if (data)
                    this.setCustomer(customer);
                return !!data;
            });
    }
}
