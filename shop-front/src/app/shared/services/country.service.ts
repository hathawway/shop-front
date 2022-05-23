import {Inject, Injectable} from '@angular/core';
import { CountryApiService } from './countryApi.service';
import { ICountryApiServiceToken } from '../interfaces/ICountryApiService';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public _country!: Country[]
  
  constructor(
    @Inject(ICountryApiServiceToken)
    private countryApiService: CountryApiService
  ) {
    this._country = [];
  }
  
  get countries() : Country[]{
    return this._country;
  }

  initialize() {
    this.countryApiService.getCountries().subscribe( country => {
      this._country = country;
    });
  }
  
}
