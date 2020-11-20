import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example02Page } from './example02.page';

const routes: Routes = [
  {
    path: '',
    component: Example02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example02PageRoutingModule {}
