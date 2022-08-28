import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';

@Component({
  selector: 'app-tv', templateUrl: './tv.page.html', styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tvs: any = [];

  constructor(private router: Router, private newService: NewServiceService) {
  }

  ngOnInit() {
    this.tvs = this.newService.phones.filter(item => item.tag ==='tvs');
    console.log(this.tvs);
  }

}
