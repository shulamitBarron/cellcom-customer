import { MessageType } from "./index";

export interface ChatMessage {
  type: MessageType;
  from: string;
  room: string;
  message: any;
  epoch?:number;
}
