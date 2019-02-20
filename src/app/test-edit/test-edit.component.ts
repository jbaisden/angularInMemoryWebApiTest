import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Data } from '../data';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {

  @Input() formData: Data;
  constructor() { }

  testForm: FormGroup;

  ngOnInit() {
    this.testForm = new FormGroup({
      id: new FormControl(this.formData.id),
      name: new FormControl(this.formData.name),
      chosenDate: new FormControl(this.formData.chosenDate),
      optionSelected: new FormControl(this.formData.optionSelected)
    });
  }

  onSubmit() {
    console.warn(this.testForm.value);
  }

}
