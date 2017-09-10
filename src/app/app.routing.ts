import { LoginComponent } from './account/login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth-guard';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent },
    {path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
