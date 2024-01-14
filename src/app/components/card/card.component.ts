import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/shared/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: Product[]= [];
  @Output() buttonClicked = new EventEmitter<string>();
  // @Output()
  constructor() { }

  ngOnInit() {}

  onButtonClick(): void {
    this.buttonClicked.emit('Button clicked!');
    // this.buttonClicked.emit(this.product);
  }

}
