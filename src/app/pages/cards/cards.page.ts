import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
// import {LocalPhonesService} from 'src/app/services/localPhones.service';
import {LocalService} from 'src/app/services/local.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NewServiceService } from 'src/app/services/new-service.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {
  // const {Filesystem} = Plugins;
 phones: any = [];
  constructor(private localService: LocalService,
    private router: Router,
    private route: ActivatedRoute, private newService: NewServiceService,
  ) { }

  ngOnInit() {
    // this.localService.getPhones().subscribe(items =>{
    //   this.phones = items;
    // });
    this.phones = this.newService.phones;
    console.log(this.phones);
  }

  onSelect(id){
    this.router.navigate(['product', id],{relativeTo:this.route});
    // this.router.navigate(['product', id],{relativeTo:this.route});
    // this.router.navigateByUrl(`cards/product/${id}`);
  }


}
