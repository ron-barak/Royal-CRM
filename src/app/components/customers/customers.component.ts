import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;

constructor(private CustomerServe:CustomersService) {

  this.customers$= this.CustomerServe.getAll();

  }

  remove(customers:Customer){
   if(confirm(`Are youe sure you want to delete ${customers.firstName} ${customers.lastName}?`)){
   this.CustomerServe.remove(customers.id)}
  }

  ngOnInit(): void {
  }

}
