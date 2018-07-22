import { Injectable} from "@angular/core";
import { CELLCOM_URL } from "../assets/constants";
import Socket = SocketIOClient.Socket;
import * as io from "socket.io-client";

@Injectable()
export class RestAPISocket {
    private socket: Socket;
    
    constructor() {
        
    }

    init() {
        this.socket = io(CELLCOM_URL, { autoConnect: false });
        this.socket.on("connect", () => {
        this.socket.emit("add");
        });

        this.socket.on('connectSupporter', () => { });
        this.socket.on('complainerAdded', () => {
                 
        });
    }

    connect() {
        this.socket.connect();
    }

    complainerAdded() {
     this.complainerAdded();
    }

}