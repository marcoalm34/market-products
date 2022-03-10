import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { units } from 'src/app/shared/utils/unitProducts';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  loading: boolean = false;
  productForm: FormGroup;
  units = units;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
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

  submit() {
    const product = this.productForm.value;
    if(product.id)
      this.createProduct();
    else
      this.updateProduct();
  }

  createProduct() {
    this.loading = true;
    if(this.productForm) {
      const product = this.productForm.value
      this.productService.addProducts(product).subscribe(
        (product) => {
          this.loading = false;
          this.alertService.showMessageSucces(`${product.name} adicionado com sucesso!`);
          this.resetForm()
        }
      )
    }
  }

  updateProduct() {

  }

  resetForm() {
    this.productForm.reset({name: '', brand: '', amount: 0, unit: '', price: 0});
  }

}
