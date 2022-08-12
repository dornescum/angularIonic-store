import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  // const {Filesystem} = Plugins;
 phones = [];
  constructor(private apiPhones: ApiService) { }

  ngOnInit() {
    this.apiPhones.getProduct().subscribe(items =>{
      this.phones = items;
    });
  }


}
