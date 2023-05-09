import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { CompanyPageComponent } from './company/company-page/company-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientPageComponent
  },
  {
    path: 'company',
    component: CompanyPageComponent
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
