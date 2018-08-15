import {Component} from "@angular/core";
import {Vendor} from "../../../model/vendor";
import {Server} from "../../../service/server";
import {UtilSvc} from "../../../service/util-svc";
import {NavController} from "ionic-angular";
import {Message} from "../../message/message";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private vendor: Vendor = new Vendor();
  private inputList: Array<any>;

  constructor(private navCtrl:NavController, private server: Server, private utilSvc: UtilSvc) {
    this.inputList = this.vendor.getInputList();
  }

  private disableSubmit(): boolean {
    return !this.vendor.getName() || !this.vendor.getAddress() || !this.vendor.getContactNumber() || !this.vendor.getArea();
  }

  private required(input): boolean {
    return input.required && !this.vendor[input.ngModel];
  }

  private setNav(message , success): void {
    this.navCtrl.pop();
    this.navCtrl.push(Message , {message: message , success: success});
  }

  private submit(): void {
    if(this.disableSubmit()) {
      return ;
    }

    let message = "";
    let request = {
      url: this.utilSvc.endPoints.vendor,
      data: { data: this.vendor , method: 'save' }
    };

    this.server.post(request).subscribe(data => {
      if(data === "success") {
        message = "Details Submitted Successfully";
        this.setNav(message , true);
      } else {
        message = "Error :: Details Not Saved";
        this.setNav(message , false);
      }
    }, error=> {
      message = "Error :: Details Not Saved \n " + JSON.stringify(error);
      this.setNav(message , false);
    });
  }
}
