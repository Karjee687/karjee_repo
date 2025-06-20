import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
     customersCount = 120;
  productsCount = 45;
  totalSales = 75000;
  pendingPayments = 12000;
}
