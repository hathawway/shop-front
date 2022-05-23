import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import { Currency } from '../models/Currency';
import { ChangeResult } from '../models/ChangeResult';

export const ICurrencyApiServiceToken = new InjectionToken('ICurrencyApiService');

export interface ICurrencyApiService {
  getCurrencies(): Observable<Currency>;

  getConversion(to: string): Observable<ChangeResult>;
}
