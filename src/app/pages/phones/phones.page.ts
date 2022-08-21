import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {LocalPhonesService} from 'src/app/services/localPhones.service';
import {Route, Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-phones', templateUrl: './phones.page.html', styleUrls: ['./phones.page.scss'],
})
export class PhonesPage implements OnInit {
  phones: any = [];
  id = '';
  lPhones: any =  [
    {
      id: 'phone-1', title: 'phone-1', price: 399
    },
    {
      id: 'phone-2', title: 'phone-2', price: 299
    },
    {
      id: 'phone-3', title: 'phone-4', price: 499
    }
  ];

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.phones = this.localPhones.phones;
    console.log(this.phones);
  }


}
