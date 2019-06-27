import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  
 constructor(public http: HttpClient){
  console.log('Hello restProvider Provider')
 }
 getUsers(){
   return this.http.get('https://localhost:44303/api/users');
 }
  }


