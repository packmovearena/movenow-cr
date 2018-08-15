import {Injectable} from "@angular/core";
import {Server} from "./server";
import {UtilSvc} from "./util-svc";

@Injectable()
export class VendorSvc {

  constructor(private utilSvc: UtilSvc, private server: Server) {

  }

  public call = (request, successCallBack, failureCallBack) => {
    this.server.send(request, successCallBack, failureCallBack);
  };

  public failure = (error): void => {
    console.log(JSON.stringify(error));
  };

  public signIn = (data, successCallBack): void => {
    let request = {
      url: this.utilSvc.endPoints.vendor.login ,
      data: data
    };
    this.call(request, successCallBack, this.failure);
  };

  public submitOTP = (data, successCallBack): void => {
    let request = {
      url: this.utilSvc.endPoints.vendor.submitOTP ,
      data: data
    };
    this.call(request, successCallBack, this.failure);
  };
}
