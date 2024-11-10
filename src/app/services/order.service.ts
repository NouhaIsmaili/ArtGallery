import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
const URL='';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly http: HttpClient = inject(HttpClient);

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(URL);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(URL +'/'+id);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(URL, order);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(URL+'/'+id, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(URL+'/'+id);
  }
}
