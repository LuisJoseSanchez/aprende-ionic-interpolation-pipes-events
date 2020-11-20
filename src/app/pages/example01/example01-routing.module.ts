import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example01Page } from './example01.page';

const routes: Routes = [
  {
    path: '',
    component: Example01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example01PageRoutingModule {}
