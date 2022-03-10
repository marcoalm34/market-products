import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { units } from 'src/app/shared/utils/unitProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup;
  units = units;
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
      amount: [0, [Validators.required, Validators.min(1)]],
      unit: [null, Validators.maxLength(3)],
      price: [0, [Validators.required, Validators.min(0.1)]],
    })
  }

  

}
