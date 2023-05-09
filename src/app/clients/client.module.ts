import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientPageComponent } from './client-page/client-page.component';

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ClientModule { }
