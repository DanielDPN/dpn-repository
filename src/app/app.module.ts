import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DpnRepositoryModule } from 'dpn-repository';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DpnRepositoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
