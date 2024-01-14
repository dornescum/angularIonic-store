import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';
import {ProductService} from '../../services/testing.service';
import {Product} from '../../utils/interface';

@Component({
  selector: 'app-tv', templateUrl: './tv.page.html', styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tvs: Product[] = [];

  constructor(private router: Router, private newService: NewServiceService, private newApi: ProductService) {
  }

  ngOnInit() {
    this.newApi.getAllProducts().subscribe(
      (data: Product[]) => {
        this.tvs = data.filter((item: Product) => item.tag === 'tv');
      },
      (error) => {
        console.error('Error fetching laptops: ', error);
      }
    );
  }

}
