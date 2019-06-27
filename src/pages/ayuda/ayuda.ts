import { Component,NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,IonicModule, IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the AyudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-ayuda',
  templateUrl: 'ayuda.html'
  
 
})

export class AyudaPage {

  constructor(public viewController: ViewController) {
  }

  close(){
    this.viewController.dismiss();
  }
  

}
