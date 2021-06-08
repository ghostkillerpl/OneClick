import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegulationsPageRoutingModule } from './regulations-routing.module';

import { RegulationsPage } from './regulations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegulationsPageRoutingModule
  ],
  declarations: [RegulationsPage]
})
export class RegulationsPageModule {}
