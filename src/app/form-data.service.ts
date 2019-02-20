import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  base_url: string = "/api/";
  tasks_endpoint: string = "tasks";

  constructor(private http: HttpClient) { }

  //Gets all tasks
  getTasks() {
    return this.http.get<Data[]>(this.base_url + this.tasks_endpoint);
    // return this.http
    //   .get(this.base_url + this.tasks_endpoint)
    //   .pipe(
    //     map(res => {
    //       return res.json();
    //     }
    //     ));
  } //getTasks  

}
