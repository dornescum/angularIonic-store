import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {AuthGuard} from 'src/app/guards/auth.guard';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-tv', templateUrl: './tv.page.html', styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tvs: any = [];
  isLogin = false;

  constructor(private router: Router, private newService: NewServiceService, private authService: AuthService) {
  }

  ngOnInit() {
    this.tvs = this.newService.phones.filter(item => item.tag ==='tvs');
    console.log(this.tvs);
    this.isLogin = this.authService.isAuthenticated();
    console.log(this.isLogin);
  }

}
