import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { Keyboard } from "@ionic-native/keyboard";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";

import { UtilService, Sql, SocketService, RestAPISocket} from "../providers/index";
import { ChatPage } from "../pages/chat/chat";
import { ChatBubble } from "../components/chatBubble/chatBubble";
import { KeyboardAttachDirective } from "../directives/keyboard-attach.directive";
import { CustomerService } from "../sharde/customer.service";
import { MyApp } from './app.component';
import { ElasticTextarea } from "../components/elasticTextarea/elasticTextarea";
import { ComplainerService } from "../sharde/complainer.service";

@NgModule({
    declarations: [
        MyApp,
        ChatPage,
        ElasticTextarea,
        ChatBubble,
        KeyboardAttachDirective
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ChatPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        CustomerService,        
        Sql,
        SocketService,
        RestAPISocket,
        UtilService,
        Keyboard,
        ComplainerService
    ]
})
export class AppModule { }

