import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example05Page } from './example05.page';

const routes: Routes = [
  {
    path: '',
    component: Example05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example05PageRoutingModule {}
