import {Injectable} from "@angular/core";
import {Server, UtilSvc} from "../app/import";


@Injectable()
export class VendorSvc {

  constructor(private utilSvc: UtilSvc, private server: Server) {

  }

  failure(error): void {
    console.log(JSON.stringify(error));
  }

  signIn(data, successCallBack): void {
    let request = {
      url: this.utilSvc.endPoints.vendor.login ,
      data: data
    };
    this.server.send(request, successCallBack, this.failure);
  }
}
