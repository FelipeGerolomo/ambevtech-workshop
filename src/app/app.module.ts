import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmeComponent } from './pages/filme/filme.component';
import { AppRoutingModule } from './route';
import { ImcComponent } from './pages/imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
