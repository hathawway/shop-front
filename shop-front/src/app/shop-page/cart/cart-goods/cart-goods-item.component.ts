import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Purchase } from 'src/app/shared/models/Purchase';

@Component({
  selector: 'app-cart-goods-item',
  templateUrl: './cart-goods-item.component.html',
  styleUrls: ['./cart-goods-item.component.less']
})
export class CartGoodsItemComponent implements OnInit {

  @Input() purchase!: Purchase;

  @Output() delete = new EventEmitter<Purchase>();
  @Output() add = new EventEmitter<Purchase>();
  
  edit!: boolean;
  form!:FormGroup;
  constructor() { 
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      count: new FormControl(1, Validators.required),
    })
  }

  ngOnInit(): void {
    this.edit = false;
  }

  submit(idPurchase: string) {
    this.add.next({
      id: idPurchase,
      count: this.form.get('count')?.value
    });
  }

  deletePurchase() {
    this.delete.next(this.purchase);
  }
  
}
