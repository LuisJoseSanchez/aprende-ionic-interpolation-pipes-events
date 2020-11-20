import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example02PageRoutingModule } from './example02-routing.module';

import { Example02Page } from './example02.page';
import { RandomNumberComponent } from 'src/app/components/random-number/random-number.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example02PageRoutingModule
  ],
  declarations: [Example02Page, RandomNumberComponent]
})
export class Example02PageModule {}
