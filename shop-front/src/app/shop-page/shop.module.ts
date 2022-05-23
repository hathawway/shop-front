import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiFieldErrorModule, TuiFieldErrorPipeModule, TuiInputCountModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDataListModule, TuiErrorModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartGoodsItemComponent } from './cart/cart-goods/cart-goods-item.component';
import { CartFormComponent } from './cart/cart-form/cart-form.component';
import { PurchasesApiService } from '../shared/services/purchasesApi.service';
import { IPurchasesApiServiceToken } from '../shared/interfaces/IPurchasesApiService';
import { ICurrencyApiServiceToken } from '../shared/interfaces/ICurrencyApiService';
import { CurrencyApiService } from '../shared/services/currencyApi.service';
import { ShopGoodsItemComponent } from './shop-goods-item/shop-goods-item.component';
import { ICountryApiServiceToken } from '../shared/interfaces/ICountryApiService';
import { CountryApiService } from '../shared/services/countryApi.service';


@NgModule({
  declarations: [
    ShopPageComponent,
    ShopGoodsItemComponent,
    CartComponent,
    CartGoodsItemComponent,
    CartFormComponent,
  ],
  exports: [
    ShopPageComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiInputModule,
    TuiInputCountModule,
    HttpClientModule,
    FormsModule,
	  ReactiveFormsModule,
	  TuiSelectModule,
	  TuiDataListModule,
    TuiFieldErrorModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorPipeModule,
	  TuiDataListWrapperModule,
  ],
  providers: [
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiService},
    {provide: ICurrencyApiServiceToken, useClass: CurrencyApiService},
    {provide: ICountryApiServiceToken, useClass: CountryApiService},
  ]
})
export class ShopModule { }
