import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  EmployeeArray: any[] = [];

  employeeName: string = '';
  employeeAddress: string = '';
  mobile: number = 0;

  currentEmployeeID = "";

  constructor(private http: HttpClient){
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.http.get("localhost:8084/blablablalla")
        .subscribe((resultData: any) => 
        {
          console.log(resultData)
          this.EmployeeArray = resultData
        });
  }

}
