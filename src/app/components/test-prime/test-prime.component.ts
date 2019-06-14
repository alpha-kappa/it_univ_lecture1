import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-test-prime',
  templateUrl: './test-prime.component.html',
  styleUrls: ['./test-prime.component.scss']
})
export class TestPrimeComponent implements OnInit {
  public cities = [
    {name: 'aaa'},
    {name: 'bbb'}
  ];

  items: MenuItem[];

  public selectedCity = {name: 'bbb'};

  constructor(private messageService: MessageService) {}

  addSingle() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

  addMultiple() {
    this.messageService.addAll([{severity: 'success', summary: 'Service Message', detail: 'Via MessageService'},
      {severity: 'info', summary: 'Info Message', detail: 'Via MessageService'}]);
  }

  clear() {
    this.messageService.clear();
  }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
    },
      {
        label: 'Edit',
        items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
        ]
      }];
  }

}
