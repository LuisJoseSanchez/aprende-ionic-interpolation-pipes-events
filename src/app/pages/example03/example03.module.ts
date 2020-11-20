import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example03PageRoutingModule } from './example03-routing.module';

import { Example03Page } from './example03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example03PageRoutingModule
  ],
  declarations: [Example03Page]
})
export class Example03PageModule {}
