import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { productReducer } from '../store/reducers/productDetails.reducer';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('product', productReducer),
  ],
})
export class ProductModule {}
