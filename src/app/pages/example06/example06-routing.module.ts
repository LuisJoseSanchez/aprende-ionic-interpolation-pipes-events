import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example06Page } from './example06.page';

const routes: Routes = [
  {
    path: '',
    component: Example06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example06PageRoutingModule {}
