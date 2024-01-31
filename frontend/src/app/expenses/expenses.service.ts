import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.restApi.uri
   }

   getExpenses() {
     return this.http.get<any>(
       this.baseUrl + '/app/expenses/view/all'
     )
   }

   saveExpense(data: any) {
     return this.http.post<any>(
       this.baseUrl + '/app/expenses/save/single', data
     )
   }

   deleteExpense(expenseId: any) {
     return this.http.post<any>(
       this.baseUrl + '/app/expenses/delete/single', expenseId
     )
   }

   getExpense(expenseId: any) {
     return this.http.post<any>(
       this. baseUrl + '/app/expenses/get/single', expenseId
     )
   }

   editExpense(data: any) {
     return this.http.post<any>(
       this.baseUrl + '/app/expenses/edit/single', data
     )
   }
}
