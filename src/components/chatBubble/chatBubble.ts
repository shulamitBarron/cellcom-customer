import { Component } from "@angular/core";
import { UtilService, SocketService } from "../../providers/index";
import { ChatMessage, MessageType } from "../../models/index";

@Component({
  selector: 'chat-bubble',
  inputs: ['chatMessage'],
  templateUrl: 'chatBubble.html'
})
export class ChatBubble {
  public chatMessage: ChatMessage;
  public messageType = MessageType;

  constructor(private socketService:SocketService) {

  }
  isFromMe(){
    return this.chatMessage.from==this.socketService.from;
  }

  formatEpoch(epoch): string {
    return UtilService.getCalendarDay(epoch);
  }
}
