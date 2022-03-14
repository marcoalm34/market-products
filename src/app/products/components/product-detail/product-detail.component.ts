import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { units } from 'src/app/shared/utils/unitProducts';
import { UnitProduct } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productForm: FormGroup;
  units: UnitProduct[] = units;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [undefined],
      name: [null, [Validators.required]],
      brand: [null],
      amount: [0, [Validators.required, Validators.min(0.1)]],
      unit: [null, Validators.maxLength(3)],
      price: [0, [Validators.required, Validators.min(0.1)]],
      date: [null, [Validators.required]]
    })
  }

  cancel() {
    this.productForm.reset();
    this.router.navigate(['products']).then();
  }

  update() {
    if(this.productForm) {

    }
  }

  delete() {
    
  }
}
