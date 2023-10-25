import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productos = new BehaviorSubject<Producto[]>([]);
    productos$ = this.productos.asObservable();

    agregarProducto(producto: Producto) {
        this.productos.next([...this.productos.value, producto]);
    }

    eliminarProducto(codigo: string) {
        this.productos.next(this.productos.value.filter(producto => producto.codigo !== codigo));
    }

    obtenerProducto(codigo: string): Producto | undefined {
        return this.productos.value.find(producto => producto.codigo === codigo);
    }

    actualizarProducto(productoActualizado: Producto) {
        this.productos.next(
            this.productos.value.map(producto =>
                producto.codigo === productoActualizado.codigo ? productoActualizado : producto
            )
        );
    }
}
