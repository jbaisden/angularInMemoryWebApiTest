import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css']
})
export class TestItemComponent implements OnInit {

  @Input() item: Data;
  constructor() { }

  ngOnInit() {
    console.warn("item created:");
    console.warn(this.item);
  }

}
