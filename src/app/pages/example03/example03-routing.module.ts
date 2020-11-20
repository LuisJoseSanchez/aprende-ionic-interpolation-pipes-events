import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example03Page } from './example03.page';

const routes: Routes = [
  {
    path: '',
    component: Example03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example03PageRoutingModule {}
