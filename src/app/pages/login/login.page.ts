import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login', templateUrl: './login.page.html', styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
      this.router.navigate(['/home']);
  }
  onSubmit(form: NgForm) {
    // console.log(form.value.email);
    // console.log(form.value.password);
    console.log(form);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (email && password) {
      console.log('sent');
      // Send a request to login servers
      form.reset();
    } else {
      // Send a request to signup servers
      console.log('error');
      this.isLoading = true;
    }
  }
}
