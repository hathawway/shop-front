import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { CountryService } from 'src/app/shared/services/country.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Поле обязательно для заполнения!',
                email:'Невалидный email (пример: gmail@gmail.com)!',
            },
        },
    ],
})
export class CartFormComponent implements OnInit {

  value = '';

  readonly email = new FormControl(null, [Validators.required, Validators.email]);
  readonly address = new FormControl(null, Validators.required);
  readonly name = new FormControl(null, Validators.required);


  readonly form = new FormGroup({
    email: this.email,
    address: this.address,
    name: this.name
  })

  
  constructor(public countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.initialize()
    this.value = 'Russian Federation';
  }

  onSubmit() {
    if (!this.form.valid) {
      this.email.markAsTouched();
      this.address.markAsTouched();
      this.name.markAsTouched();
    } 
    
  }

}
