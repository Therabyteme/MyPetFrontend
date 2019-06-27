import { Component,NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,IonicPageModule } from 'ionic-angular';
import { AyudaPage } from '../ayuda/ayuda';
import {PetapediaPage} from '../petapedia/petapedia';
import {TumascotaPage} from '../tumascota/tumascota';
import {AlertController} from 'ionic-angular';


/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@NgModule({
  declarations:[
    AyudaPage
  ],
  imports:[
    IonicPageModule.forChild(AyudaPage),
  ],
  exports:[
    AyudaPage
  ],
  entryComponents:[
    AyudaPage,
  ]
})
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

 ayuda(){
let alert = this.alertCtrl.create({
  title: 'My Pet RD',
  subTitle: 'Creado por Brandon Mendoza, todos los derechos reservados 2017',
  buttons:['Cerrar']
});
alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  abrirpetapedia(){
    this.navCtrl.push('PetapediaPage')
  }
  abrirtumascota(){
    this.navCtrl.push('TumascotaPage')
  }

}
