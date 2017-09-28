import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuperMaterial } from './super.material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimeModule } from './time/time.module';
import { DisplayComponent } from './display';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    TimeModule,
    BrowserModule,
    AppRoutingModule,
    SuperMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
