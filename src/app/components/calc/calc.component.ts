import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  public opnds = [];
  public act = ''; // + - * :
  public result = 0;
  private operations = {
    '+': (a, b) => (a + b),
    '-': (a, b) => (a - b),
  };

  public setOp(num) {
    const oprnd = !this.act ? 0 : 1;
    this.opnds[oprnd] = (this.opnds[oprnd] || 0) * 10 + +num;
    console.log(this.opnds);
  }

  public setAct(act) {
    if (!this.opnds.length && !this.result) { return; }
    if (this.result) {
      this.opnds[0] = this.result;
    }
    this.act = act;
  }

  public calc() {
    if (!this.act) { return; }

    this.result = this.opnds.length < 2 ? this.opnds[0] : this.operations[this.act](...this.opnds);
    this.opnds = [];
    this.act = '';
  }

  public clear() {
    const l = this.opnds.length;

    switch (true) {
      case l > 1:
        this.opnds.splice(1, 1);
        return;
      case this.act !== '':
        this.act = '';
        return;
      case l === 1:
        this.opnds.splice(0, 1);
        return;
      default:
        this.result = 0;
    }
  }

}
