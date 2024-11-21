import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Order } from '../../../model/order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-edit-order',
  standalone: true,
  imports: [CurrencyPipe,DatePipe,CommonModule],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent implements OnInit{
  order:Order[]=[];
  private orderService:OrderService=inject (OrderService)

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      data=>{
        console.log(data)
        this.order=data
      }
    )
  }
  onStatus(id:string){
    this.orderService.updateState(id,"completed").subscribe(
      data=>{
        console.log(data)
      }
    )
  }

}
