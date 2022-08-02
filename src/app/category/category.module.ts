import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { MainMealComponent } from './main-meal/main-meal.component';
import { DessertComponent } from './dessert/dessert.component';
import { AppModule } from '../app.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { CocktailsComponent } from './cocktails/cocktails.component';

@NgModule({
  declarations: [
    CategoryComponent,
    MainMealComponent,
    DessertComponent,
    CocktailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModuleModule
  ]
})
export class CategoryModule { }
