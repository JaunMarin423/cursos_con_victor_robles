import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { SapatosComponent } from '../app/sapatos/sapatos.components';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    SapatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
