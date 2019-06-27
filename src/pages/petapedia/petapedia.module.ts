import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetapediaPage } from './petapedia';

@NgModule({
  declarations: [
    PetapediaPage,
  ],
  imports: [
    IonicPageModule.forChild(PetapediaPage),
  ],
})
export class PetapediaPageModule {}
