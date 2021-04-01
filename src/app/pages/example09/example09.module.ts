import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example09PageRoutingModule } from './example09-routing.module';

import { Example09Page } from './example09.page';
import { CheckerboardDirective } from 'src/app/directives/checkerboard.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example09PageRoutingModule
  ],
  declarations: [Example09Page, CheckerboardDirective]
})
export class Example09PageModule {}
