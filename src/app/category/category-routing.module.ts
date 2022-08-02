import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { DessertComponent } from './dessert/dessert.component';
import { MainMealComponent } from './main-meal/main-meal.component';

const routes: Routes = [{
  path: '', component: CategoryComponent,
  children: [
    { path: 'main-meal', component: MainMealComponent },
    { path: 'dessert', component: DessertComponent },
    { path: 'cocktails', component: CocktailsComponent },
    
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
