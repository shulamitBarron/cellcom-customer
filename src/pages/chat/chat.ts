import { Component, ViewChild, EventEmitter, NgZone } from '@angular/core';
import { IonicPage, LoadingController, Loading, ToastController, NavController } from 'ionic-angular';

import { ChatMessage } from "../../models/index";
import { SocketService, UtilService, RestAPISocket } from "../../providers/index";
import { ComplainerService } from "../../sharde/complainer.service";

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
   })
export class ChatPage {
    @ViewChild('txtChat') txtChat: any;
    @ViewChild('content') content: any;

    messages: any[] = [];
    chatBox: string = "";
    btnEmitter: EventEmitter<string> = new EventEmitter<string>();
    startChatBtn: boolean = true;
    loading: Loading;
    roomId: string;

    constructor(public navCtrl: NavController,
        private _zone: NgZone,
        private socketService: SocketService,
        private loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        private complainerService: ComplainerService,
        private restAPISocket:RestAPISocket,
        public toast:ToastController,
    ) {        
        this.init();
    }

    ionViewWillLeave() {
        this.complainerService.removeComplain(this.roomId);
        this.socketService.disconnect();
    }

    ionViewDidLoad() {
        debugger;
        this.socketService.init();
        this.restAPISocket.init();
    }

    init() {
        this.socketService.messages.subscribe((chatMessage: ChatMessage) => {
            this.loading.dismiss();
            this._zone.run(() => this.messages.push(chatMessage));
            this.scrollToBottom();
        });
        const self = this;
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
        this.socketService.theSupporterLeftTheChat.subscribe(() => {           
            self.txtChat.ionTxtArea.disabled = true;
            const toast = this.toast.create({
                    message: 'The supporter left the chat',
                    duration: 5000,
                    position:'bottom'
                });
            toast.present();
            this.navCtrl.setRoot('HomePage');
        });
    }

    public startChat() {
        this.startChatBtn = false;
        this.socketService.startChat();
        this.restAPISocket.connect();
        this.presentLoadingDefault();

    }

    public sendMessage() {
        this.btnEmitter.emit("sent clicked");
        this.txtChat.setFocus();
        const message = this.txtChat.content;
        this.send(message);
        this.txtChat.clearInput();
    }

    send(message) {
        this.socketService.newRequest(message);
        this.chatBox = '';
        this.scrollToBottom();
    }

    scrollToBottom() {
        this._zone.run(() => setTimeout(() => this.content.scrollToBottom(300)));
    }
    
    presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: 'Connecting to supporter...',
            dismissOnPageChange: true,
            showBackdrop: true
        });
        this.loading.present().then(() => {
            this.roomId = this.socketService.getRoomId();
        });
    }
}
