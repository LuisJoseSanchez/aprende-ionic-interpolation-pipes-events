import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example01PageRoutingModule } from './example01-routing.module';

import { Example01Page } from './example01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example01PageRoutingModule
  ],
  declarations: [Example01Page]
})
export class Example01PageModule {}
