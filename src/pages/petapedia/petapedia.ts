import { Component } from '@angular/core';
import { IonicPage, NavController, } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';



/**
 * Generated class for the PetapediaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-petapedia',
  templateUrl: 'petapedia.html',
})
export class PetapediaPage {
animals;
  constructor(public navCtrl: NavController,
   public restProvider:RestProvider ) {
   
   
  }

  ionViewDidLoad(){
    this.restProvider.getUsers()
    .subscribe(
      (data)=>{this.animals=data;},
    (error)=> {console.log(error);}
    )
  }

}
