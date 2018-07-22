import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import 'rxjs/add/observable/of';

import { CELLCOM_URL } from "../assets/constants";
import { IComplainer } from "../models/index";

@Injectable()
export class ComplainerService {

    complainers: Array<IComplainer>;

    constructor(public http: Http) { }

    getComplainers(): Array<IComplainer> {
        return this.complainers;
    }

    removeComplain(room:string): void {
        this.http.delete(CELLCOM_URL + "/complainers/deleteComlainerByRoom?room=" + room)
            .subscribe(() => { });
    }
}
