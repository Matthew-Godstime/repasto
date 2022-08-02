import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    SharedComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [SharedComponent, RecipesComponent]
})
export class SharedModuleModule { }
