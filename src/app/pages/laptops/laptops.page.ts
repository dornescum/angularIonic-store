import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {TestingService} from '../../services/testing.service';
import {Product} from '../../utils/interface';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.page.html',
  styleUrls: ['./laptops.page.scss'],
})
export class LaptopsPage implements OnInit {
  laptops: Product[] = [];

  constructor( private newApi: TestingService) { }

  ngOnInit() {

    this.newApi.getAllProducts().subscribe(
      (laptopsData: Product[]) => {
        this.laptops = laptopsData.filter((item: Product) => item.tag === 'laptops');
      },
      (error) => {
        console.error('Error fetching laptops: ', error);
      }
    );
  }

}
