import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  testData: Array<Data>;
  constructor(private formService: FormDataService) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.formService.getTasks().subscribe(data => {
      this.testData = data;
    });
  } //getAllTasks

}
