import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar-productos', pathMatch: 'full' },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductosComponent },
  { path: 'actualizar-producto/:codigo', component: ActualizarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
