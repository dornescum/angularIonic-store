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

  constructor( private route: ActivatedRoute, private apiPhones: ApiService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiPhones.getProduct().subscribe(items =>{
      this.phones = items;
    });
  }


}
