import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../shared/Product';
import {IonicModule} from '@ionic/angular';
import {CurrencyPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    IonicModule,
    CurrencyPipe,
    NgIf
  ],
  standalone: true
})
export class ProductListComponent implements OnInit {
  @Input() title = '';
  @Input() img = '';
  @Input() favorite = 1;
  @Input() flashSale = 1;
  @Input() price= 0;
  @Input() taxPrice= 0;
  @Output() navigateToProduct: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  onProductClick() {
    this.navigateToProduct.emit(this as unknown as Product);
  }


}
