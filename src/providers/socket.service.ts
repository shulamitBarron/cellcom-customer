import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import Socket = SocketIOClient.Socket;
import * as io from "socket.io-client";
import { UtilService } from "./index";
import { ChatMessage, MessageType, IComplainer } from "../models/index";
import { CustomerService } from "../sharde/customer.service";
import { CELLCOM_URL, SOCKET_HOST } from "../assets/constants";


@Injectable()
export class SocketService {
    public messages: Observable<ChatMessage>;
    private socketObserver: any;
    private socket: Socket;
    private room: string;
    public complainer: IComplainer;
    public from: string;
    disabledTheIonContent: EventEmitter<any> = new EventEmitter();
    theSupporterLeftTheChat: EventEmitter<any> = new EventEmitter();
    dangerToastToUser: EventEmitter<any> = new EventEmitter();

    constructor(private _customer: CustomerService, private http: Http) {
        this.complainer = this._customer.getCustomer() as IComplainer;
        this.messages = Observable.create(observer => {
            this.socketObserver = observer;            
        });
        // this.init();
    }

    saveComplainerInDb() {
        this.complainer.roomId = this.room;
        this.http.post(CELLCOM_URL + "/complainers/addComplainer", this.complainer)
            .subscribe(() => { });
    }

    init() {
        debugger;
        this.socket = io(SOCKET_HOST);

        this.socket.on("connect", (data) => {
            this.room = Math.round((Math.random() * 1000000)).toString();           
        });

        this.socket.on('tooManyUnPermissionWords', () => {
            this.disabledTheIonContent.emit();
        });

        this.socket.on('UserUsedUnPermissionWord', () => {
            this.dangerToastToUser.emit();
        });

        this.socket.on('leave', (data) => {
            this.theSupporterLeftTheChat.emit();
        });

        this.socket.on('disconnect', (data) => {
            debugger;
        });

        this.socket.on('startChat', (data) => {
            debugger;
        });

        this.socket.on('peopleinchat', (data) => {
debugger;
            if (data.number === 0) {
                    // call the server-side function 'login' and send user's parameters
                    this.socket.emit('login', {
                        user: this.complainer.name,
                        avatar: this.complainer.email,
                        id: this.room
                    });
            } else if (data.number === 1) {
                debugger;
            } 
    
        });

        this.socket.on('receive', response => {
            debugger;
            let chatMessage: ChatMessage = response;
            if (typeof response === 'string') {
                chatMessage = {
                    type: MessageType.MSG_RES,
                    from: this.from,
                    room: this.socket.id,
                    message: response
                };
            } else {
                chatMessage.type = MessageType.MSG_RES;
            }
            chatMessage.epoch = UtilService.getEpoch();
            this.socketObserver.next(chatMessage);
        });
    }

    getComplainerData() {
        this.from = this.complainer.name.toString();
    }

    disconnect() {
        this.socket.disconnect();
    }

    connect() {
        this.socket.connect();
        this.getComplainerData();
    }

    leave() {
        //this.socket.leave();
    }

    tooManyUnPermissionWords() {
        this.tooManyUnPermissionWords();
    }
    UserUsedUnPermissionWord() {
        this.UserUsedUnPermissionWord();
    }
    newRequest(message: string) {
        const chatMessage: ChatMessage = {
            type: MessageType.MSG_REQ,
            message: message,
            room: this.room,
            from: this.from,
            epoch: UtilService.getEpoch()
        };
        this.socket.emit('msg', chatMessage)
        this.socketObserver.next(chatMessage);

    }

    startChat() {
        this.saveComplainerInDb();
        // this.connect();
        this.socket.emit('load', this.room);
    }

    getRoomId() {
        return this.room;
    }

    returnComplainerName(): string {
        return this.complainer.name.toString();
    }

    addToRoom(roomId): string {
        this.room = roomId;
        this.connect();
        return this.room;
    }
}
