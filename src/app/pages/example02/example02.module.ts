import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example02PageRoutingModule } from './example02-routing.module';

import { Example02Page } from './example02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example02PageRoutingModule
  ],
  declarations: [Example02Page]
})
export class Example02PageModule {}
