import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example04PageRoutingModule } from './example04-routing.module';

import { Example04Page } from './example04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example04PageRoutingModule
  ],
  declarations: [Example04Page]
})
export class Example04PageModule {}
