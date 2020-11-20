import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example08Page } from './example08.page';

const routes: Routes = [
  {
    path: '',
    component: Example08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example08PageRoutingModule {}
