import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {LocalPhonesService} from 'src/app/services/localPhones.service';


@Component({
  selector: 'app-items', templateUrl: './items.component.html', styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  id = '';
  product: any = [];

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

  constructor(private localPhones: LocalPhonesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.product =this.route.snapshot.paramMap.get('id');
    this.lPhones.find(x =>x.id === this.id);


    console.log(this.product);
  }

}
