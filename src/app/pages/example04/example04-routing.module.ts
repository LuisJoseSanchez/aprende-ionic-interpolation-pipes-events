import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example04Page } from './example04.page';

const routes: Routes = [
  {
    path: '',
    component: Example04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example04PageRoutingModule {}
