import { LoginService } from './../account/login.service';
import { element } from 'protractor';
import { Products } from './model/Products';
import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products [] = [];
  messageError = '';

  constructor(private productsService: ProductsService, private logiService: LoginService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
        this.products = products;
    }, error => {
        switch (error.status) {
          case 0:
            this.messageError = 'Erro inesperado no sistema. Você será redirecionado para tela de login';
            break;
          case 401:
            this.messageError = 'Usuário não autorizado ou token expirado. Você será redirecionado para tela de login';
            break;
          default:
            this.messageError = 'Erro inesperado no sistema. Você será redirecionado para tela de login';
        }
        setTimeout(() => this.logiService.logout(), 5000 );
     });
  }

}
