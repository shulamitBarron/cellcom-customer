import { NgModule } from '@angular/core';
import { UpdateDetailsPage} from './update-details';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [UpdateDetailsPage],
  imports: [IonicPageModule.forChild(UpdateDetailsPage)],
  entryComponents: [UpdateDetailsPage]
})
export class UpdateDetailsPageSModule { }