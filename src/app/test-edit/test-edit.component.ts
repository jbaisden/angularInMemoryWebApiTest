import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Data } from '../data';
import { FormDataService } from '../form-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {

  editId: number;
  editMode: boolean = false;
  loading: boolean = false;

  formData: Data;
  taskEdit: string;


  constructor(private dataService: FormDataService, private route: ActivatedRoute, private router: Router) { }

  testForm: FormGroup;

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.editId = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  initForm() {

    if (this.editMode) {
      this.dataService.getTask(this.editId).subscribe((data: Data) => {
        this.formData = data;
      });
    } else {

    }

    this.testForm = new FormGroup({
      id: new FormControl(this.formData.id),
      name: new FormControl(this.formData.name),
      chosenDate: new FormControl(this.formData.chosenDate),
      optionSelected: new FormControl(this.formData.optionSelected)
    });
  }

  onSubmit() {
    console.warn(this.testForm.value);
    this.saveEdit(this.testForm.value);
  }

  saveEdit(task: Data) {

    this.dataService.updateTask(task).subscribe(data => {
      this.editMode = false;
    });

    this.router.navigate(['list']);

  }

}
