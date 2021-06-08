import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  email: string = ""
  password: string = ""

  constructor(
    public afAuth:AngularFireAuth,
    public alertCtrl: AlertController,
    private navCtrl: NavController
  ) { 
    
  }

  ngOnInit() {
  }

  async register(){
    const { email, password } = this
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)
      console.log(res)
      const alert = await this.alertCtrl.create({  
        header: 'Rejestracja ukończona',   
        subHeader: 'Spróbuj się zalogować !',  
        buttons: ['OK']  
      });  
      await alert.present();  
      const result = await alert.onDidDismiss();  
      console.log(result);
    } catch(error){
      console.dir(error)
    }

  }

  GoToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  GoToRegulations() {
    this.navCtrl.navigateForward('/regulations');
  }

  async showAlert() {  
      
  }  

}

