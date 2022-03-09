import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
