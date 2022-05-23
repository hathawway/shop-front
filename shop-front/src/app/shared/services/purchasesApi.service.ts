import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../models/Purchase';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const host = 'http://localhost:3000/purchases';

@Injectable()
export class PurchasesApiService implements IPurchasesApiService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(host);
  }

  getById(id: string): Observable<Purchase> {
    return this.httpClient.get<Purchase>(`${host}/${id}`);
  }
}
