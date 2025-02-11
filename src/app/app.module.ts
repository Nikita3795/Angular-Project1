import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { CcompComponent } from './ccomp/ccomp.component';

@NgModule({
  declarations: [
    AppComponent,
    AcompComponent,
    BcompComponent,
    CcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
