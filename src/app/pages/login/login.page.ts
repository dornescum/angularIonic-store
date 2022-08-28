import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login', templateUrl: './login.page.html', styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(private router: Router, private alertController: AlertController) {
  }

  ngOnInit() {
    this.presentAlert();
  }


  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log('Email : ', email, 'Password : ', password);

    if (email && password) {
      console.log('sent');
      this.isLoading = false;
      // Send a request to login servers
      // console.log('loading Is : ',this.isLoading);
      form.reset();
    } else {
      // Send a request to signup servers
      console.log('error');
      this.isLoading = true;
      // console.log('loading Is : ',this.isLoading);
    }
  }
  onSwitchAuthMode(){
    console.log('loading Is : ',this.isLoading);
    this.isLogin = !this.isLogin;
    console.log('loading Is : ',this.isLoading);
  }
  onLogin() {
    if (!this.isLoading){
      this.router.navigate(['/home']);
      console.log('loading Is : ',this.isLoading);
    } else {
      // this.router.navigate(['/home']);
      alert('error');
      console.log('loading Is : ',this.isLoading);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Made for mobile',
      // subHeader: 'Open on your phone',
      message: 'Open on your phone',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
