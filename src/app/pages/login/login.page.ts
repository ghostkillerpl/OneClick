import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/firebase-auth';
import { Platform } from '@ionic/angular';


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
    private navCtrl: NavController,
    private fireAuth: AngularFireAuth,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.fireAuth.onAuthStateChanged(user => {
  //       if (user) {
  //         this.navCtrl.navigateForward('/tabs');
  //       }
  //       else {
  //         this.navCtrl.navigateForward('/login');
  //       }
  //     });
  //   });
  // }

  login() {
    this.fireAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.navCtrl.navigateForward('/tabs');
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        console.dir(err)
      });
    }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }
  
}
