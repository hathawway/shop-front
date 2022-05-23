import {Inject, Injectable} from '@angular/core';
import { CurrencyApiService } from './currencyApi.service';
import { ICurrencyApiServiceToken } from '../interfaces/ICurrencyApiService';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public _currency!: string[]
  
  constructor(
    @Inject(ICurrencyApiServiceToken)
    private currencyApiService: CurrencyApiService
  ) {
    this._currency = [];
  }
  
  get currencies() : string[]{
    return this._currency;
  }

  initialize() {
    this.currencyApiService.getCurrencies().subscribe(currency => {
      for (const key in currency.symbols) {
        this._currency.push(key);
      }
    });
  }



  recalc(currency: string) {
    return this.currencyApiService.getConversion(currency)
  }
  
}
