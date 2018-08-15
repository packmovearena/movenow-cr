import {Component, Injectable} from "@angular/core";
import {CommonSvc} from "../../service/common-svc";

@Component({
  selector: 'loader',
  templateUrl: 'loader.html'
})
export class Loader {

  constructor(private commonSvc: CommonSvc) {

  }

  getSpinner(): boolean {
    return this.commonSvc.getSpinner();
  }

}
