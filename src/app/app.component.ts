import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lecture3';
  isFormsVisible = true;

  toggleForms() {
    this.isFormsVisible = !this.isFormsVisible;
  }
}
