import {Component} from "@angular/core";
import {User} from "../../../model/user";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-user-profile',
  templateUrl: 'userProfile.html'
})
export class UserProfile {
  user: User;
  constructor(public navParams: NavParams) {
    this.user = this.navParams.data;
  }
}
