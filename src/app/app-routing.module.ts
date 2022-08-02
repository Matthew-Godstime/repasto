import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './home-page/item-details/item-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'repasto', component: HomePageComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', redirectTo: '/repasto', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
