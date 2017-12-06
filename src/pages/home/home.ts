import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PruebaPage, RegistroPage } from "../index.pages"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  

  constructor(public navCtrl: NavController) {

         
} 


irAregistro(){
    this.navCtrl.push(RegistroPage);
  }
  irAinicio(){
    this.navCtrl.push(PruebaPage);
  }

}
