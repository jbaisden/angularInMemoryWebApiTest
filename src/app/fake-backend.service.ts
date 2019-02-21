import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  dbData: Array<Data> = new Array(
    new Data(1, "Malcom", "09/11/1980", "Married"),
    new Data(2, "Reginald", "04/07/1992", "Single"),
  );
  constructor() { }

  createDb() {
    console.warn("createDb() CALLED");
    return { "tasks": this.dbData }
  }

  // protected responseInterceptor(res: ResponseOptions, ri: RequestInfo): ResponseOptions {
  //   res.body = this.dbData;
  //   return res;
  // }


}
