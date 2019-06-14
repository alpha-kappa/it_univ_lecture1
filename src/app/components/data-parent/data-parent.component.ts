import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: [
      './data-parent.component.scss',
      '../../../styles-test/compiled.css'
  ]
})
export class DataParentComponent {
  public childTitle = 'initial value';
  public childText: string;

  public getTextFromChild(data: string): void {
    this.childText = data;
  }
}
