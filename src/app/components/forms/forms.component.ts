import { Component } from '@angular/core';

export

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  const Forms enum = {PRIME, MATERIAL};
  whichForm: Forms = Forms.PRIME;

  toggleForms(type: Forms): void {
    this.whichForm = this.whichForm === Forms.PRIME ? Forms.MATERIAL : Forms.PRIME;
  }
}
