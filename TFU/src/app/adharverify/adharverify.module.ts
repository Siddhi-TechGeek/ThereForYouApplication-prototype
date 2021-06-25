import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdharverifyPageRoutingModule } from './adharverify-routing.module';

import { AdharverifyPage } from './adharverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdharverifyPageRoutingModule
  ],
  declarations: [AdharverifyPage]
})
export class AdharverifyPageModule {}
