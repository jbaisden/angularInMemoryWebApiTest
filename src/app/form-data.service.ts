import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import 'rxjs/add/operator/map'
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
  }

  getTask(id: number) {
    return this.http.get<Data>(`${this.base_url + this.tasks_endpoint}/${id}`);
  }

  //Updates a Task
  updateTask(update: Data) {
    console.log(update);
    return this.http
      .put<Data>(this.base_url + this.tasks_endpoint, update);
  }

  createTask(newData: Data) {
    return this.http
      .post<Data>(this.base_url + this.tasks_endpoint, newData);
  }

}
