import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserSearchPage} from "../user/user-search/user-search";
import {Settings} from "../settings/settings";
import {RegisterPage} from "./register/register";
import {SearchPage} from "./search/search";

@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html',
})
export class VendorPage {

  private pages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Register Vendor', component: RegisterPage },
      { title: 'Search Vendor', component: SearchPage },
      { title: 'Verify Vendor', component: '' }
    ];
  }

  private openPage(page): void {
    this.navCtrl.push(page.component);
  }
}
