import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../Producto/producto.service';
import { Producto } from '../Producto/producto';


@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})

export class CrearProductosComponent {
  productoForm: FormGroup;

  constructor( private fb: FormBuilder,
    private router: Router, private productService: ProductService){


  this.productoForm = this.fb. group({
        codigo: ['', Validators. required],
        nombre: ['', Validators. required],
        precio: ['', Validators. required],
      })

  }

  agregarProducto(){
    const PRODUCTO: Producto = {
    codigo: this.productoForm.get('codigo' )?.value,
    nombre: this.productoForm.get('nombre' )?.value,
    precio: this.productoForm.get('precio')?.value, 
    }

    this.productService.agregarProducto(PRODUCTO);
    this.router.navigate(['/listar-productos']);
  }

  navegarAProductos() {
    this.router.navigate(['/listar-productos']);
  }

}
