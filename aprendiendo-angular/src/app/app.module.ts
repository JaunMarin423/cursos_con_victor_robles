import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { SapatosComponent } from '../app/sapatos/sapatos.components';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadore.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    SapatosComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
