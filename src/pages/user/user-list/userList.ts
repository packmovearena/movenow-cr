import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Server} from "../../../service/server";
import {UtilSvc} from "../../../service/util-svc";
import {User} from "../../../model/user";
import {UserProfile} from "../user-profile/userProfile";

@Component({
  selector: 'page-user-list',
  templateUrl: 'userList.html'
})
export class UserList {

  userList: Array<User> = new Array<User>();
  constructor(private navCtrl: NavController , private server: Server , private utilSvc: UtilSvc) {
      this.loadUserDetails();
  }

    private loadUserDetails(): void {
      let request = {
        url: this.utilSvc.endPoints.userList
      };

      this.server.post(request).subscribe(data => {
        this.userList = data;
      }, error=> {
          console.log(JSON.stringify(error));
        });
    }

    private openUser(user): void {
      this.navCtrl.push(UserProfile , user);
    }

}
