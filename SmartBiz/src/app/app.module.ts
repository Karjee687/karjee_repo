import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionsComponent } from './transactions/transactions.component';

// ✅ Define routes here
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    HomeComponent,
    CustomersComponent,
    ProductsComponent,
    AddCustomersComponent,
    ReportsComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // ✅ Use the defined routes here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
