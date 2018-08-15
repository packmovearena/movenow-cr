import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {OtpPage} from "../../app/import";
import {VendorSvc} from "../../service/vendor-svc";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  errorMsg: string = '';
  mobileNumber: number;

  constructor(private navCtrl: NavController, private storage: Storage,
              private vendorSvc: VendorSvc) {

  }

  dataChanged =  function(): void {
    this.errorMsg = '';
  };

  signIn = (): void => {
    if (this.validate()) {
        this.errorMsg = 'Invalid Mobile Number';
        return;
    }

    this.vendorSvc.signIn({ mobileNumber: this.mobileNumber }, this.signInSuccess);
  };

  signInSuccess = (data): void => {
    if (data && data.success) {
      this.navCtrl.push(OtpPage, this.mobileNumber);
    } else {
      this.errorMsg = data.message;
    }
  };

  validate = (): boolean => {
    let error = isNaN(this.mobileNumber);
    this.errorMsg = '';
    if (error) {
      if (this.mobileNumber) {
        this.errorMsg = 'Invalid Mobile Number';
      }
      return error;
    }
    let numberLength = this.mobileNumber.toString().length;
    error = numberLength !== 10;
    this.errorMsg = '';
    if (error && numberLength === 10) {
      this.errorMsg = 'Invalid Mobile Number';
    }
    return error;
  }

}
