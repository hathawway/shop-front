import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../models/Purchase';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ICurrencyApiService } from '../interfaces/ICurrencyApiService';
import { ChangeResult } from '../models/ChangeResult';
import { Currency } from '../models/Currency';

const host = 'https://api.apilayer.com/exchangerates_data/';

@Injectable()
export class CurrencyApiService implements ICurrencyApiService {
 
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set("apikey", "wJJdnObUWgym0luMJawB3r2GUyBgO88V")
  }

  getCurrencies(): Observable<Currency> {
    return this.httpClient.get<Currency>(`${host}symbols`, {headers: this.headers})
  }

  getConversion(to: string): Observable<ChangeResult> {
    return this.httpClient.get<ChangeResult>(`${host}convert?to=${to}&from=USD&amount=1`, {headers: this.headers})
  }
}
