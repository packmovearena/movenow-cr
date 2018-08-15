
import {Component} from "@angular/core";
import {Vendor} from "../../../model/vendor";
import {Server} from "../../../service/server";
import {UtilSvc} from "../../../service/util-svc";
import {NavController} from "ionic-angular";
import {VendorDetailPage} from "../detail/vendor-detail";

@Component({
  selector: 'vendor-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  private vendorList: Array<Vendor> = new Array<Vendor>();
  private filter: Vendor = new Vendor();
  private getDate: any;

  constructor(private navCtrl: NavController, private server: Server , private utilSvc: UtilSvc) {
    this.getDate = this.utilSvc.getDate;
    this.search();
  }

  ionViewDidEnter() {
    this.search();
  }

  private openVendor(vendor): void {
    this.navCtrl.push(VendorDetailPage , vendor);
  }

  private search(): void {
    let request = {
      url: this.utilSvc.endPoints.vendor,
      params: this.filter
    };

    this.server.get(request).subscribe(data => {
      this.vendorList = data;
    }, error=> {
      console.log(JSON.stringify(error));
    });
  }

}
