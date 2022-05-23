import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import { Country } from '../models/Country';


export const ICountryApiServiceToken = new InjectionToken('ICountryApiService');

export interface ICountryApiService {
  getCountries(): Observable<Country[]>;
}
