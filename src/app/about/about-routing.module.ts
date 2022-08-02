import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [{
  path: '', component: AboutComponent,
  children: [{ path: '', component: HistoryComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
