import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChatPage } from "../pages/chat/chat";
import { ISupporter, ICustomer } from "../models/index";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: string = 'LoginPage';
    supporter: ISupporter;
    user: ICustomer;
    pages: Array<{ ios: string, md: string, title: string, component: any }>;

    constructor(private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen) {
        this.initializeApp();
        this.pages = [
            { ios: 'home', md: 'home', title: 'Home', component: 'HomePage' },
            { ios: 'chatbubbles', md: 'chatbubbles', title: 'UpdateDetails', component: 'UpdateDetailsPage' },
            { ios: 'chatbubbles', md: 'chatbubbles', title: 'Contact your representative', component: ChatPage },
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
            this.nav.setRoot(page.component);
    }
}
