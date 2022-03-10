import { AfterContentInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { units } from 'src/app/shared/utils/unitProducts';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  activeTabs: number;
  loading: boolean = false;
  productForm: FormGroup;
  units = units;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'amount', 'total', 'actions'];
  products: Product[] = [];
  noProducts: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getProducts();
  }

  getProducts() {
    const subscription = this.productService.getProducts().subscribe(
      productList => {
        this.products = productList;
      },
      (err) => {
        this.noProducts = 'Sem produtos a ser exibido';
      }
    )
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [undefined],
      name: [null, [Validators.required]],
      brand: [null],
      amount: [0, [Validators.required, Validators.min(1)]],
      unit: [null, Validators.maxLength(3)],
      price: [0, [Validators.required, Validators.min(0.1)]],
    })
  }

  onSubmit() {
    const product = this.productForm.value;
    if(!product.id)
      this.createProduct();
    else
      this.updateProduct();
  }

  createProduct() {
    this.loading = true;
    if(this.productForm) {
      const product = this.productForm.value
      const subscription = this.productService.addProducts(product).subscribe(
          (product) => {
            this.loading = false;
            this.alertService.showMessageSucces(`${product.name} adicionado com sucesso!`);
            this.resetForm();
            this.activeTabs = 1;
          },
          (err) => {
            this.alertService.showMessageError('Erro ao criar o produto, tente novamente!');
            this.loading = false;
          }
        )
        this.subscriptions.push(subscription);
    }
  }

  updateProduct() {
    console.log('updated!')
  }

  deleteProduct() {
    
  }

  resetForm() {
    this.productForm.reset({name: '', brand: '', amount: 0, unit: '', price: 0});
  }

}
