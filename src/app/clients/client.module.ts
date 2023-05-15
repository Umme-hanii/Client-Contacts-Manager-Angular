import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material.module';

import { ClientFormComponent } from './client-form/client-form.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientService } from './client.service';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientItemComponent } from './client-list/client-item/client-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';

const routes: Routes = [
  {
    path: 'clients/new',
    component: ClientPageComponent
  },
  {
    path: 'clients/search',
    component: ClientSearchPageComponent
  },
  {
    path: 'clients/details/:id',
    component: ClientDetailsPageComponent
  }
]

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientPageComponent,
    ClientListComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ClientDetailsPageComponent,
    ClientSearchPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CustomMaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
