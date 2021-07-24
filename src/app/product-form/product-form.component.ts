import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { productState } from '../store/reducers/productDetails.reducer';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<productState>) {}

  ngOnInit(): void {}

  createProductForm() {}
  onSubmit() {}
}
