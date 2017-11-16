import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuperMaterial } from './super.material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimeModule } from './time/time.module';
import { DisplayComponent } from './display';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    TimeModule,
    BrowserModule,
    AppRoutingModule,
    SuperMaterial
  ],
  providers: [
    AuthGuard,
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
