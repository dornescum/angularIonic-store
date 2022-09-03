import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.page.html',
  styleUrls: ['./laptops.page.scss'],
})
export class LaptopsPage implements OnInit {
  laptops: any = [];
  taxPrice= Math.random();

  constructor(private router: Router, private localService: NewServiceService) { }

  ngOnInit() {
    this.laptops = this.localService.phones.filter(item=>item.tag ==='laptops');

  }

}
