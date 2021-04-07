import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/firebase-auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(
    public afAuth:AngularFireAuth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(user => {
        this.navCtrl.navigateForward('/tabs');
      })
    } catch(err){
      console.dir(err)
    }
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }
  
}
