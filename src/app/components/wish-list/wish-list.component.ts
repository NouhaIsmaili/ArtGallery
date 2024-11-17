import {  CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { ArtTableService } from '../../services/art-table.service';
import { Order } from '../../model/order';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [DatePipe,FormsModule,ReactiveFormsModule,RouterLink,CurrencyPipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {
  readonly fb: FormBuilder = inject(FormBuilder)
  artTableService: ArtTableService = inject(ArtTableService)
  orderService: OrderService = inject(OrderService)
  ordertab: Order[] = []
form: any;

onclick(){
  console.log(localStorage.getItem('list'))
}
  wishList: any[] = [];
  total: number = 0;

orderForm: FormGroup=new FormGroup({
  clientName:new FormControl(),
  clientPhoneNumber: new FormControl(),
  clientAdress: new FormControl(),
  ordredProducts: new FormControl(),
  total: new FormControl(),
  orderDate: new FormControl(),

})

  ngOnInit(): void {
    this.loadWishList();
    this.calculateTotal();

    this.orderForm = this.fb.nonNullable.group({
      clientName: ['',Validators.required],
      clientPhoneNumber: ['',[Validators.required,Validators.pattern(/^[2759][0-9]{7}$/)]],
      clientAdress: ['',Validators.required],
      ordredProducts: [this.wishList],
      total: [this.total],
      orderDate: [new Date()],

    });

  }
  onSubmit() {
    console.log(this.orderForm.value)
    this.orderService.addOrder(this.orderForm.value).subscribe(
      ord=>{
        console.log(ord)
      }
    )

}

  loadWishList(): void {
    // Load the wishList from localStorage
    this.wishList = JSON.parse(localStorage.getItem('list') || '[]');
  }

delete(idx:number){
  const t=JSON.parse(localStorage.getItem('list')||'[]')
  t.splice(idx,1)
  localStorage.setItem('list',JSON.stringify(t))
  this.wishList=t
  this.calculateTotal()
}

calculateTotal() {
  this.wishList.forEach(x=>{
    if(x.article.discount>0){
      this.total+=((100-x.article.discount)/100 )*x.article.price*x.qte
    }else{
      this.total+=x.article.price*x.qte
    }
  })
}




}
