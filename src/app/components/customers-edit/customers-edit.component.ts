import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

import { Customer } from '../../interfaces/customer';
import { CustomersService } from '../../services/customers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit,OnDestroy {
  constructor(
    private customersService: CustomersService,
    private router: Router,
    private activatedRouteService: ActivatedRoute) {}

    customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };
private _subscriptions:Subscription[]=[];
  async onSubmit({ valid, value }: NgForm) {
    if (valid) {
      await this.customersService.update(this.customer.id, value);
      this.router.navigate(['../..']);
    }
  }

  ngOnInit(): void {
    this._subscriptions.push(
    this.activatedRouteService.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id).pipe(take(1))
      ))
      .subscribe((customer) => {this.customer = customer;
      })
    );
}
ngOnDestroy(){
  this._subscriptions.forEach((subscriptions)=>subscriptions.unsubscribe())
}
}
