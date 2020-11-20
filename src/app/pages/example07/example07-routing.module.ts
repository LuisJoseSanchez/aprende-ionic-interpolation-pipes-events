import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example07Page } from './example07.page';

const routes: Routes = [
  {
    path: '',
    component: Example07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Example07PageRoutingModule {}
