import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountModule } from './account/account.module';
import { ProductsModule } from './products/products.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    ProductsModule,
    routing

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
