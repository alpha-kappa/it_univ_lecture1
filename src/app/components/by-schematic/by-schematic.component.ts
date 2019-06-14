import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-schematic',
  template: '<h1 class="boo">./by-schematic.component.html</h1>',
  styles: ['.boo {color: blue}']
})
export class BySchematicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
