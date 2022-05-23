import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from 'src/app/shared/models/Purchase';

@Component({
  selector: 'app-shop-goods-item',
  templateUrl: './shop-goods-item.component.html',
  styleUrls: ['./shop-goods-item.component.less']
})
export class ShopGoodsItemComponent implements OnInit {

  @Input() purchase!: Purchase;

  @Output() add = new EventEmitter<Purchase>();
  
  form!:FormGroup;
  constructor() { 
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      count: new FormControl(1, Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit(idPurchase: string) {
    this.add.emit({
      id: idPurchase,
      count: this.form.get('count')?.value
    });
  }

}
