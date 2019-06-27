import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../src/pages/principal/principal';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})



export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
abrirmain(){
  this.navCtrl.push('PrincipalPage')
}

}
