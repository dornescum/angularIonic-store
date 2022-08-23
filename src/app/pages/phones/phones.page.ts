import {Component, OnInit, Input, Output} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {LocalPhonesService} from 'src/app/services/localPhones.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ItemsComponent } from './items/items.component';


@Component({
  selector: 'app-phones', templateUrl: './phones.page.html', styleUrls: ['./phones.page.scss'],providers:[ItemsComponent]
})
export class PhonesPage implements OnInit {
  phones: any = [];
  id = '';
  testing = 'test';

  constructor( private route: ActivatedRoute, private apiPhones: ApiService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiPhones.getProduct().subscribe(items => {
      console.log(items);
      this.phones = items;
    });
  }


}
