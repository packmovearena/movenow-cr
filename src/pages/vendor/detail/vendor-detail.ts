
import {Component} from "@angular/core";
import {Vendor} from "../../../model/vendor";
import {Server} from "../../../service/server";
import {UtilSvc} from "../../../service/util-svc";
import {AlertController, NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-vendor-detail',
  templateUrl: 'vendor-detail.html'
})
export class VendorDetailPage {
  private change: boolean = false;
  private edit: boolean = false;
  private inputList: Array<any>;
  private vendor: Vendor;
  private vendorUtil: Vendor = new Vendor();

  constructor(private alertCtrl: AlertController , private navCtrl: NavController ,
              private navParams: NavParams, private server: Server ,
              private utilSvc: UtilSvc) {
    this.vendor = this.navParams.data;
    this.inputList = this.vendorUtil.getInputList();
  }

  private confirmDelete(): void {
    let alert = this.alertCtrl.create({
      title: 'Delete Vendor',
      message: 'Are you sure to delete this vendor ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteVendor();
          }
        }
      ]
    });
    alert.present();
  }

  private deleteVendor(): void {
    if (this.disableSubmit()) {
      return ;
    }
    let request = {
      url: this.utilSvc.endPoints.vendor,
      data: { _id: this.vendor._id , method: 'delete' }
    };

    this.server.post(request).subscribe(data => {
      this.edit = false;
      this.navCtrl.pop();
    }, error=> {
      alert(JSON.stringify(error));
    });
  }

  private disableEdit(): boolean {
    return this.change;
  }

  private disableSubmit(): boolean {
    let disable = false;
    this.inputList.forEach((input)=> {
      if(this.required(input)) {
        disable = true;
        return;
      }
    });
    return disable;
  }

  private required(input): boolean {
      return this.edit && input.required && !this.vendor[input.ngModel];
  }

  private submit(): void {

    if (this.disableSubmit()) {
      return ;
    }
    let request = {
      url: this.utilSvc.endPoints.vendor,
      data: { data: this.vendor, method: 'save'}
    };

    this.server.post(request).subscribe(data => {
      this.edit = false;
    }, error=> {
      alert(JSON.stringify(error));
    });
  }
}
