import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { Server } from "../../service/server";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {VendorPage} from "../vendor/vendor";
import {UserSearchPage} from "../user/user-search/user-search";
import {Settings} from "../settings/settings";
import {LoginPage} from "../login/login";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  pages: Array<{title: string, component: any}>;
  userList: any ;

  constructor(public navCtrl: NavController , public server: Server ,
              public platform: Platform , public statusBar: StatusBar ,
              public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();
    this.pages = [
      { title: 'Vendor', component: VendorPage },
      { title: 'Customer', component: UserSearchPage },
      { title: 'Settings', component: Settings }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private goToLogin(): void {
    this.updateDB();
    this.navCtrl.setRoot(LoginPage);
  }

  private openPage(page): void {
    this.navCtrl.push(page.component);
  }

  private updateDB() {
    this.storage.remove('login_id');
  }
}
