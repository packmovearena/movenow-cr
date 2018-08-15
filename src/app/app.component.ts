import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import {LoginPage} from "../pages/login/login";
import {Profile} from "../pages/profile/profile";
import {Logo} from "../pages/logo/logo";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Logo;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen , private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.storage.get("login_id").then(loginId => {
        if (loginId) {
          this.rootPage = Profile;
        } else {
          this.rootPage = LoginPage;
        }
      });
    });
  }
}
