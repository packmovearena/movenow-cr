import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class Message {
  message: string;
  success: boolean;

  constructor(private navParams: NavParams) {
      this.message = this.navParams.data.message;
      this.success = this.navParams.data.success;
  }
}
