import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EspacioclienteComponent } from './espaciocliente/espaciocliente.component';
import { SolicitudOKComponent } from './solicitud-ok/solicitud-ok.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    EspacioclienteComponent,
    SolicitudOKComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
