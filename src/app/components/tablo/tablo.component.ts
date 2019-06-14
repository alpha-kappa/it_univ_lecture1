import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tablo',
  templateUrl: './tablo.component.html',
  styleUrls: ['./tablo.component.scss']
})
export class TabloComponent {
  private privateOperands: number[];

  @Input() public set operands(value) {
    this.privateOperands = value;
  }

  @Input() public action: string;

  public get first() {
    return this.privateOperands[0] || '_';
  }

  public get second() {
    return this.privateOperands[1] || '_';
  }


}
