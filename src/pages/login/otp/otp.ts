import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Profile, VendorSvc} from "../../../app/import";

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html'
})
export class OtpPage {

  enableResendBtn: boolean = false;
  mobileNumber: string = '';
  otp: string = '';
  seconds: number = 59;
  timer: any ;

  constructor(private navCtrl: NavController, private params: NavParams,
              private vendorSvc: VendorSvc) {
    this.mobileNumber = this.params.data;
    this.startTimer();
  }

  enableResend(): boolean {
    return this.enableResendBtn;
  }

  resend(): void {
    this.vendorSvc.signIn({ mobileNumber: this.mobileNumber }, this.resendSuccess);
  }

  resendSuccess(data): void {
    this.startTimer();
  }

  startTimer(): void {
    this.enableResendBtn = false;
    this.timer = setInterval(()=> {
      if (this.seconds === 1) {
        this.enableResendBtn = true;
        clearInterval(this.timer);
      }
      this.seconds--;
    }, 1000);
  }

  submit(): void {

  }

  submitSuccess(data): void {
    if (data && data.success) {
      this.navCtrl.push(Profile, this.mobileNumber);
    } else {
      //TODO:: handle this
    }
  }
}
