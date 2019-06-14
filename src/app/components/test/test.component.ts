import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  private array: string;
  public sortedArray: number[];

  constructor() {
    this.array = '4,2,1,6,7,8,5,3,9';
  }

  ngOnInit() {
    this.sortArray();
  }

  sortArray(): number[] {
    console.log(this.array);
    this.sortedArray = [...(this.array.split(',').map(parseInt))].sort();
    console.log(this.sortedArray);
    return this.sortedArray;
  }
}
