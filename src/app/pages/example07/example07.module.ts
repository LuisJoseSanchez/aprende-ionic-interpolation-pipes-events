import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example07PageRoutingModule } from './example07-routing.module';

import { Example07Page } from './example07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example07PageRoutingModule
  ],
  declarations: [Example07Page]
})
export class Example07PageModule {}
