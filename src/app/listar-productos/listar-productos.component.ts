import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto/producto';
import { ProductService } from '../Producto/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit{
  productos: Producto[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.productos$.subscribe(productos => {
      this.productos = productos;
    });
  }

  navegarACrearProducto() {
    this.router.navigate(['/crear-producto']);
  }

  eliminarProducto(codigo: string) {
    this.productService.eliminarProducto(codigo);
    // Actualiza la lista de productos después de eliminar
    this.productService.productos$.subscribe(productos => {
      this.productos = productos;
    });
  }

  navegarActualizarProducto(codigo: string) {
    this.router.navigate(['/actualizar-producto', codigo]);
  }
}
