import { NgModule } from '@angular/core';
import { ChatPage} from './chat';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ChatPage],
  imports: [IonicPageModule.forChild(ChatPage)],
  entryComponents: [ChatPage]
})
export class ChatPageSModule { }