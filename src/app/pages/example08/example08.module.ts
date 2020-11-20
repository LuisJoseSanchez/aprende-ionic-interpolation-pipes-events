import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example08PageRoutingModule } from './example08-routing.module';

import { Example08Page } from './example08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example08PageRoutingModule
  ],
  declarations: [Example08Page]
})
export class Example08PageModule {}
