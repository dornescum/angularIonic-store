import {Component, OnInit} from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {ApiService} from 'src/app/services/api.service';
import {Observable} from 'rxjs';
import {LocalService} from 'src/app/services/local.service';
import {LocalPhonesService} from 'src/app/services/localPhones.service';
import {NewServiceService} from 'src/app/services/new-service.service';


@Component({
  selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  title = '';
  id = '';
  products: any = [];
  product: any = [];


  constructor(private localService: LocalService, private route: ActivatedRoute,
              private localPhoneService: LocalPhonesService, private newService: NewServiceService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    // this.localService.getPhones().subscribe(items =>{
    //   this.product = items.filter(x => x.id===this.id);
    //   console.log(this.product);
    // });
    // this.product = this.localPhoneService.phones.find(x => x.id===this.id);
    this.product = this.newService.phones.find(x => x.id===this.id);
    console.log(this.product);
  }

}
