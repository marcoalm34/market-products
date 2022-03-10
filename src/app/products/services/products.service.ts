import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly api = `${environment.url}/products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api)
      .pipe(
        delay(1500)
      )
  }

  addProducts(p: Product): Observable<Product> {
    let price: any
    return this.http.post<Product>(this.api, p)
      .pipe(
        delay(1500),
        tap(p => price = p.price)
      )
  }

  updateProduct(p: Product) {
    
  }

  deleteProduct(p: Product) {

  }
}
