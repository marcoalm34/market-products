import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      id: [undefined],
      name: [null, [Validators.required]],
      brand: [null],
      amount: [0],
      unit: [null, [Validators.required, Validators.maxLength(2)]],
      price: [null, [Validators.required, Validators.min(0.1)]],
    })
  }

}
