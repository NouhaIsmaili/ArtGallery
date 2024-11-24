import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Order } from '../../../model/order';
import { OrderService } from '../../../services/order.service';
import { ArtTableService } from '../../../services/art-table.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [CurrencyPipe,AsyncPipe,DatePipe,CommonModule],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent implements OnInit{
  order$!:Observable<Order[]>;
  private orderService:OrderService=inject (OrderService)

  ngOnInit(): void {
    this.order$=this.orderService.getOrders()
  }
  onStatus(tab:Order){
    this.orderService.updateState(tab.id,"completed").subscribe(
      data=>{
        console.log(data)
        this.order$=this.orderService.getOrders()
        })
  }
}
// data.ordredProducts.forEach(order=>{
        //   this.artTableService.updateqte(tab.id,order.article.quantity-order.qte)
        //   console.log("1")
        //   console.log(order)