import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './company/company-page/company-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { ClientModule } from './clients/client.module';

const routes: Routes = [
  {
    path: 'clients/new',
    loadChildren: () => import('./clients/client.module').then(m => m.ClientModule)
  },
  {
    path: 'clients/search',
    loadChildren: () => import('./clients/client.module').then(m => m.ClientModule)
  },
  {
    path: 'clients/details/:id',
    loadChildren: () => import('./clients/client.module').then(m => m.ClientModule)
  },
  {
    path: 'company',
    component: CompanyPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: '/clients/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
