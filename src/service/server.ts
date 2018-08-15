import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {CommonSvc, OtpPage} from "../app/import";
import {Observable} from "rxjs/Observable";

@Injectable()
export class Server {

  constructor(private http: HttpClient , private commonSvc: CommonSvc) {

  }

  get = function(request): any {

    if (!this.isValid(request)) {
      throw new Error('Invalid Request');
    }
    this.commonSvc.showSpinner();
    return new Observable((observer) => {
      let url = request.url ;
      let params = request.params ? request.params : {};
      let options = {
        headers: ""
      };
      options.headers = request.headers ? request.headers : {};
      options.headers['from-source'] = 'movenow-only';
      this.http.get(url, { params: params }, options)
        .subscribe(data => {
            observer.next(data);
            this.commonSvc.hideSpinner();
          }
          ,error => {
            observer.error(error);
            this.commonSvc.hideSpinner();
          });
    });
  };

  private isValid = function (request): any {
    return request && request.url ;
  };

  post = function(request): any {
    if (!this.isValid(request)) {
      throw new Error('Invalid Request');
    }
    this.commonSvc.showSpinner();
    return new Observable((observer) => {
      let url = request.url ;
      let data = request.data ? request.data : {};
      let options = {
        headers: ""
      };
      options.headers = request.headers ? request.headers : {};
      options.headers['from-source'] = 'movenow-only';
      this.http.post(url, data, options)
        .subscribe(data => {
            observer.next(data);
          this.commonSvc.hideSpinner();
        }
        ,error => {
            observer.error(error);
          this.commonSvc.hideSpinner();
        });
    });
  };

  send = function (request, successCallBack, failCallBack) {
    if (typeof successCallBack !== 'function' || typeof failCallBack !== 'function') {
      throw new Error('Success and Fail Callback are required')
    }
    this.post(request).subscribe(successCallBack, failCallBack);
  }

}
