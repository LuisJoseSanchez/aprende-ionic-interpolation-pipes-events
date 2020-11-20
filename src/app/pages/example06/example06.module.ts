import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example06PageRoutingModule } from './example06-routing.module';

import { Example06Page } from './example06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example06PageRoutingModule
  ],
  declarations: [Example06Page]
})
export class Example06PageModule {}
