import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  base_url: string = "/api/";
  tasks_endpoint: string = "tasks";

  constructor(private http: Http) { }

  //Gets all tasks
  getTasks() {
    return this.http
      .get(this.base_url + this.tasks_endpoint)
      .pipe(
        map(res => {
          return res.json();
        }
        ));
  } //getTasks  

}
