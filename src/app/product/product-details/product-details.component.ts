import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createProduct } from 'src/app/store/actions/product.action';
import { AppState, selectUser } from 'src/app/store/reducers';
import {
  getProductState,
  productState,
  selectProductList,
} from 'src/app/store/reducers/productDetails.reducer';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productForm: FormGroup;
  product: any;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.createProductForm();
    this.store.select(selectProductList).subscribe((res) => {
      this.product = res;
    });
  }

  createProductForm() {
    this.productForm = this.fb.group({
      name: [],
      price: [],
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      const productData = {
        name: this.productForm.get('name').value,
        age: this.productForm.get('price').value,
      };
      this.store.dispatch(
        createProduct({ productName: productData.name, price: productData.age })
      );
    }
  }
}
