import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {BlankPage} from '../blank/blank';

/**
 * Generated class for the TumascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tumascota',
  templateUrl: 'tumascota.html',
})
export class TumascotaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController
    ,public client: HttpClient) {
  }
 
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TumascotaPage');
  }
  abrirRegistro(){
    let alert = this.alertCtrl.create({
      title: 'Registra tu Mascota',
      inputs:[{
        name: 'Nombre de Mascota',
        placeholder: 'Nombre de la Mascota'
      },
      {
        name: 'Raza',
        placeholder: 'Raza'
      },
      
      {
        name: 'Fecha de Nacimiento',
        placeholder:'Fecha',
        type:'date'
      },
      {
        name: 'Peso',
        placeholder:'Peso al Momento',
        type: 'number'

      }
        
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          role: 'ok'
        },
        {
          text:'Subir carta de vacunacion'
        }
      ]
    });
    alert.present();
  }
  abrirHistoria(){
    this.navCtrl.push('BlankPage');
  }

}
