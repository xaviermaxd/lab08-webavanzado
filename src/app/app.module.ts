import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductosComponent,
    ListarProductosComponent,
    ActualizarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
