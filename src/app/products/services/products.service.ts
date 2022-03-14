import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly api = `${environment.url}/products`;
  productSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    if(!this.loaded) {
      this.http.get<Product[]>(this.api)
        .pipe( delay(1500))
        .subscribe(this.productSubject$);
      this.loaded = true;
    }
    return this.productSubject$.asObservable();
  }

  addProducts(p: Product): Observable<Product> {
    return this.http.post<Product>(this.api, p)
      .pipe(
        tap((prod: Product) => this.productSubject$.getValue().push(prod)),
        delay(1500)
      )
  }

  // getProductId(id: number): Observable<Product> {
    
  // }

  updateProduct(id: number): Observable<Product> {
    const idProduct = `${this.api}/${id}`;
    return this.http.put<Product>(this.api, idProduct)
      .pipe(
        delay(1500)
      )
  }

  deleteProduct(id: number): Observable<Product>{
    const idProduct = `${this.api}/${id}`;
    return this.http.delete<Product>(this.api)
      .pipe(
        delay(1500)
      )
  }
}
