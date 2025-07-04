import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      mobile: '9876543210',
      address: 'Bhubaneswar',
    },
    { id: 2, name: 'Sunita Sahu', mobile: '8887654321', address: 'Cuttack' },
    { id: 3, name: 'Akash Das', mobile: '9090909090', address: 'Puri' },
    { id: 4, name: 'Neha Mishra', mobile: '7878787878', address: 'Rourkela' },
    { id: 5, name: 'Manas Ranjan', mobile: '7676767676', address: 'Balasore' },
  ];

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
