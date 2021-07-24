import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserModule } from './user/user.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { environment } from './../environments/environment';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  { path: '', component: ProductFormComponent },
];

@NgModule({
  declarations: [AppComponent, ProductFormComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    UserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
