import {Purchase} from '../models/Purchase';
import {Inject, Injectable} from '@angular/core';
import {IPurchasesApiService, IPurchasesApiServiceToken} from '../interfaces/IPurchasesApiService';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  private _purchases: Purchase[] = [];
  public purchase!: Purchase;
  private _summary = 0;

  constructor(
    @Inject(IPurchasesApiServiceToken)
    private purchasesApiService: IPurchasesApiService) {}

  get purchases(): Purchase[] {
    return this._purchases;
  }

  get summary(): number {
    return this._summary;
  }

  initialize() {
    this.purchasesApiService.getAll().subscribe(purchases => {
      this._purchases = purchases;
    });
  }

  addPurchase(purchase: Purchase): void {
    localStorage.setItem(purchase.id, purchase.count!.toString());
  }

  delPurchase(purchase: Purchase): void {
    localStorage.removeItem(purchase.id);
  }

  getByIdPurchase(idPurchase: string) {
    return this.purchasesApiService.getById(idPurchase)
  }

  updateSummary(currencyСurrent: number): void {
    this._summary = this._purchases.reduce((sum, purchase) => 
      purchase.price!*purchase.count!*currencyСurrent + sum, 0
    );
  }

  getLocalStorage(): void {
    this._purchases.splice(0, this._purchases.length);
    let per!: Purchase;
    for (let key,i=0;i<localStorage.length;i++) {
      key = localStorage.key(i);
      this.getByIdPurchase(key!).subscribe(purchase => {
        per = purchase;
        per.count = Number(localStorage.getItem(purchase.id));
        this._purchases.push(per)
      })
    }  
  }

}
