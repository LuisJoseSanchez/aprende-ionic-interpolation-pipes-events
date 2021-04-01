import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example09Page } from './example09.page';

const routes: Routes = [
  {
    path: '',
    component: Example09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example09PageRoutingModule {}
