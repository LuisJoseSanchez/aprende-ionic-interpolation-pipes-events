import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example05PageRoutingModule } from './example05-routing.module';

import { Example05Page } from './example05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example05PageRoutingModule
  ],
  declarations: [Example05Page]
})
export class Example05PageModule {}
