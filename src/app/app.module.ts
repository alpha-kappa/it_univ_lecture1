import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { BySchematicComponent } from './components/by-schematic/by-schematic.component';
import {FormsModule} from '@angular/forms';
import { DataParentComponent } from './components/data-parent/data-parent.component';
import { DataChildComponent } from './components/data-child/data-child.component';
import { CalcComponent } from './components/calc/calc.component';
import { ButtonComponent } from './components/button/button.component';
import { TabloComponent } from './components/tablo/tablo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestPrimeComponent } from './components/test-prime/test-prime.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { TestMaterialComponent } from './components/test-material/test-material.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormPrimengComponent } from './components/form-primeng/form-primeng.component';
import { FormMaterialComponent } from './components/form-material/form-material.component';
import { FormsComponent } from './components/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BySchematicComponent,
    DataParentComponent,
    DataChildComponent,
    CalcComponent,
    ButtonComponent,
    TabloComponent,
    TestPrimeComponent,
    TestMaterialComponent,
    FormPrimengComponent,
    FormMaterialComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    MenuModule,
    ToastModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
      MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
