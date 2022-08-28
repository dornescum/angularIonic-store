import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewServiceService} from 'src/app/services/new-service.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.page.html',
  styleUrls: ['./phones.page.scss'],
})
export class PhonesPage implements OnInit {
  phones: any = [];
  constructor(private router: Router, private localService: NewServiceService) { }

  ngOnInit() {
    this.phones = this.localService.phones.filter(item=>item.tag ==='phone');
  }

}
