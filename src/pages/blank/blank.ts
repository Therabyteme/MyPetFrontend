import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }
  agregarevento(){
    let alert = this.alertCtrl.create({
      title:'Registrar evento de tu mascota',

      inputs:[{
        name: 'nombre',
        placeholder: 'Nombre del evento'

      },
      {
        name: 'fecha',
        placeholder:'fecha',
        type:'date'

      },
      {
        name: 'tipo',
        placeholder: 'Tipo de evento'
      }
       
      ],
      buttons:[{
        text:'Aceptar'
      },
      {
        text:'Cancelar'
      }
    ]

      
    })
    alert.present();
  }

}
