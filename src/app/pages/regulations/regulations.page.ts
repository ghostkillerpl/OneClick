import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.page.html',
  styleUrls: ['./regulations.page.scss'],
})
export class RegulationsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {
    
   }

  ngOnInit() {
  }

  register() {
    this.navCtrl.navigateForward('/register');
  }

}
