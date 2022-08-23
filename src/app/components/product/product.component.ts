import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewServiceService } from 'src/app/services/new-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id = '';
  product: any = [];

  constructor(
    private route: ActivatedRoute,
    private newService: NewServiceService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.newService.phones.find((x) => x.id === this.id);
    console.log(this.product);
  }
}
