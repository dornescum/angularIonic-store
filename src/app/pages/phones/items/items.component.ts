import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  id = '';
  product: any = [];
  // testing = '';
  data = [];

  constructor(
    private apiPhones: ApiService,
    private route: ActivatedRoute,
    private testing: TestingService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.product = this.apiPhones.getInfo();
    this.product = this.apiPhones.getProduct().subscribe((item) => {
      const data = item.filter((product: any) => product.id === this.id);
      console.log(data);
      return data;
    });

    console.log(this.product);
  }


}
    // this.product = this.apiPhones.getProduct().subscribe(item => console.log(item.filter((p: any) => p.id ===this.id)));

      //  this.product = this.apiPhones.getProduct().subscribe((item) => {
      //    const data = item.filter((product: any) => product.id === this.id);
      //    console.log(data);
      //    return data;
      //  });