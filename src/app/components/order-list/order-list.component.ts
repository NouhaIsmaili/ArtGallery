import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../model/order';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})

  export class OrderlistComponent implements OnInit {
    orders: Order[] = [];
    loading: boolean = true;
    errorMessage: string | null = null;
  
    constructor(private orderService: OrderService) {}
  
    ngOnInit(): void {
      this.fetchOrders();
    }
  
    fetchOrders(): void {
      this.orderService.getOrders().subscribe({
        next: (data) => {
          this.orders = data;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to load orders. Please try again later.';
          console.error(error);
          this.loading = false;
        },
      });
    }
  
    deleteOrder(id: number): void {
      if (confirm('Are you sure you want to delete this order?')) {
        this.orderService.deleteOrder(id).subscribe({
          next: () => {
            this.orders = this.orders.filter(order => order.idOrder !== id.toString());
            alert('Order deleted successfully.');
          },
          error: (error) => {
            alert('Failed to delete the order. Please try again.');
            console.error(error);
          }
        });
      }
    }
  }

