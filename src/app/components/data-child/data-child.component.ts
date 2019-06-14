import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.scss']
})
export class DataChildComponent  implements OnChanges {
  @Input() public set title(value: string) {
    this.privateTitle = `###${value}###`;
  }

  public get title() {
    return this.privateTitle;
  }

  @Output() public textToParent = new EventEmitter<string>();
  public childText: string;
  private privateTitle: string;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  public passTextToParent() {
    this.textToParent.emit(this.childText);
  }
}
