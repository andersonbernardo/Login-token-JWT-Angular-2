import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
