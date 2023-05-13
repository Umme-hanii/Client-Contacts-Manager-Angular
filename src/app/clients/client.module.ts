import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientService } from './client.service';

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CustomMaterialModule
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
