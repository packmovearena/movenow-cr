import {NgModule, ErrorHandler, enableProdMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { MyApp } from './app.component';
import {
  AboutPage, CommonSvc, ContactPage, VendorPage, HomePage,
  Loader, LoginPage, Logo, Profile, Message, OtpPage, RegisterPage, SearchPage,
  Server, Settings, UserList, UserProfile, UtilSvc, UserSearchPage,
  VendorDetailPage, VendorSvc
} from './import';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";

enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    VendorPage,
    HomePage,
    LoginPage,
    Loader,
    Logo,
    Message,
    OtpPage,
    Profile,
    RegisterPage,
    SearchPage,
    Settings,
    UserList,
    UserProfile,
    UserSearchPage,
    VendorDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    VendorPage,
    HomePage,
    Loader,
    LoginPage,
    Logo,
    Message,
    OtpPage,
    Profile,
    RegisterPage,
    SearchPage,
    Settings,
    UserList,
    UserProfile,
    UserSearchPage,
    VendorDetailPage
  ],
  providers: [
    CommonSvc,
    HTTP,
    Server,
    StatusBar,
    SplashScreen,
    UtilSvc,
    VendorSvc,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
