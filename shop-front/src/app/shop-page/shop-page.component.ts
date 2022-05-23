import { Component, OnInit } from '@angular/core';
import { Purchase } from '../shared/models/Purchase';
import { PurchasesService } from '../shared/services/purchases.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.less']
})
export class ShopPageComponent implements OnInit {

  expanded = false;
  name = "Корзина";

  constructor(public purchasesService: PurchasesService) { }

  ngOnInit(): void {
    this.purchasesService.initialize();
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesService.addPurchase(purchase);
  }

  toggle() {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      this.name = "Корзина";
    } else {
      this.name = "Список покупок";
    }
  }

}
