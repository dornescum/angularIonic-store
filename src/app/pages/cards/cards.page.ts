import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {LocalPhonesService} from 'src/app/services/localPhones.service';
import {LocalService} from 'src/app/services/local.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  // const {Filesystem} = Plugins;
 phones: any = [];
  constructor(private localService: LocalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.localService.getPhones().subscribe(items =>{
      this.phones = items;
    });
  }

  onSelect(id){
    this.router.navigate(['product', id],{relativeTo:this.route});
    // this.router.navigate(['product', id],{relativeTo:this.route});
    // this.router.navigateByUrl(`cards/product/${id}`);
  }


}
