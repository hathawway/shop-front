
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ICountryApiService } from '../interfaces/ICountryApiService';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';


const host = 'https://restcountries.com/v2/all';

@Injectable()
export class CountryApiService implements ICountryApiService {

  constructor(private httpClient: HttpClient) {}


  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(host);
  }

}
