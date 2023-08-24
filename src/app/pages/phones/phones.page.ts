import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {Product} from '../../utils/interface';
import {TestingService} from '../../services/testing.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.page.html',
  styleUrls: ['./phones.page.scss'],
})
export class PhonesPage implements OnInit {
  phones: Product[]= [];

  constructor( private newApi: TestingService) { }

  ngOnInit() {
    this.newApi.getAllProducts().subscribe(
      (data: Product[]) => {
        this.phones = data.filter((item: Product) => item.tag === 'phones');
      },
      (error) => {
        console.error('Error fetching laptops: ', error);
      }
    );
  }

}
