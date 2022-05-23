import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/shared/models/Purchase';
import { CurrencyService } from 'src/app/shared/services/currencyChanger.service';
import { PurchasesService } from 'src/app/shared/services/purchases.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],

  
})
export class CartComponent implements OnInit {

  value = '';
  itog = 0;
  items: Purchase[] = [];
  currencyСurrent = 0;
  constructor(public currencyService: CurrencyService,
    public purchasesService: PurchasesService) {}

  ngOnInit(): void {  
    this.currencyService.initialize();
    this.value = 'USD';
    this.currencyСurrent = 1;
    this.getLocalStoragePurchases();
    this.sumPurchase();
  }

  count() {
    this.currencyService.recalc(this.value).subscribe( (value) => {
      this.currencyСurrent = value.result;
      this.sumPurchase();
    })
  }

  sumPurchase() {
    this.purchasesService.updateSummary(this.currencyСurrent);
  }

  delPurchase(purchase: Purchase): void {
    this.purchasesService.delPurchase(purchase);
    this.getLocalStoragePurchases();
    this.sumPurchase();
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesService.addPurchase(purchase);
    this.sumPurchase();
  }

  getLocalStoragePurchases(): void {
    this.purchasesService.getLocalStorage();
  }


}
