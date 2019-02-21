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

  dbDataOther: Array<Data> = new Array(
    new Data(1, "ASDFASDF", "09/11/1980", "Married"),
    new Data(2, "ZXCVZXCVZXCV", "04/07/1992", "Single"),
  );
  constructor() { }

  createDb() {
    return { "other1": this.dbDataOther, "tasks": this.dbData }
  }

  protected responseInterceptor(res: ResponseOptions, ri: RequestInfo): ResponseOptions {
    console.warn(res);
    console.warn(ri);
    if (ri.resourceUrl.indexOf('tasks') > -1) {
      console.warn('return tasks collection');
      res.body = ri.collection;
    }
    return res;
  }


}


