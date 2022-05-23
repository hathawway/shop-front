import {Observable} from 'rxjs';
import {Purchase} from '../models/Purchase';
import {InjectionToken} from '@angular/core';

export const IPurchasesApiServiceToken = new InjectionToken('IPurchasesApiService');

export interface IPurchasesApiService {
  getAll(): Observable<Purchase[]>;

  getById(idPurchase: string): Observable<Purchase>;
}
