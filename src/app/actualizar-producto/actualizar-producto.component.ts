import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../Producto/producto';
import { ProductService } from '../Producto/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {
  productoForm: FormGroup;
  producto: Producto | undefined;
  

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      codigo: [{value: '', disabled: true}, Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {
    const codigo = this.route.snapshot.paramMap.get('codigo');
  
    if (codigo) {
      this.producto = this.productService.obtenerProducto(codigo);
  
      if (this.producto) {
        this.productoForm.patchValue(this.producto);
      } else {
        this.router.navigate(['/listar-productos']);
      }
    } else {
      this.router.navigate(['/listar-productos']);
    }
  }
  

  actualizarProducto() {
    const PRODUCTO_ACTUALIZADO: Producto = {
      codigo: this.productoForm.get('codigo')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      precio: this.productoForm.get('precio')?.value,
    };

    this.productService.actualizarProducto(PRODUCTO_ACTUALIZADO);
    this.router.navigate(['/listar-productos']);
  }

  navegarAProductos() {
    this.router.navigate(['/listar-productos']);
  }
  
}
