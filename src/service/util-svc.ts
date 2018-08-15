import {Injectable} from "@angular/core";


@Injectable()
export class UtilSvc {

    urlConstant: string = 'https://d321zs1hyo65tr.cloudfront.net/'; /*'http://localhost:8000/'*/
    constructor() {

    }

    public endPoints: any = {
      vendor: {
        login: this.urlConstant + "vendor/login",
        submitOTP: this.urlConstant + "vendor/submitOTP"
      }
    };

    public getDate(date) : string {
      return new Date(date).toString().split('GMT')[0];
    }
}
