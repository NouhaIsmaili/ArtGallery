import { Component, inject, OnInit } from '@angular/core';
import { ArtTable } from '../../../model/art-table';
import { ArtTableService } from '../../../services/art-table.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [CurrencyPipe,DatePipe,FormsModule],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css'
})
export class ProductsEditComponent  implements OnInit{

  
  liste:ArtTable[]=[];
  private ArtTableService:ArtTableService=inject(ArtTableService)
  filteredProducts: ArtTable[] = [];
  bindingprice: ArtTable[] = [];
  bindingname: ArtTable[] = [];

  searchTerm: string = '';
  maxPrice?: number;
  minPrice?: number;
  ngOnInit(): void {
    this.ArtTableService.getProducts().subscribe(
      data=>{this.liste=data
      this.filteredProducts=data
      }
    )
  }

  delete(id:string){
    this.ArtTableService.deleteProduct(id).subscribe(
      data=>console.log(data)
    )
  }

  searchProducts(): void {
    this.filterProductsByPrice()    
    // si on a fait une recherche par prix
    if(this.maxPrice || this.minPrice){
      this.filteredProducts = this.bindingprice.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }else{
      this.filteredProducts = this.liste.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.bindingname=this.filteredProducts
  }


  filterProductsByPrice() {
    if(this.searchTerm==''){
      this.filteredProducts = this.liste.filter(product => 
       (this.minPrice ? product.price >= this.minPrice : true) 
       &&
       (this.maxPrice ? product.price <= this.maxPrice : true)
    );
    }else{
      this.filteredProducts = this.bindingname.filter(product => 
        (this.minPrice ? product.price >= this.minPrice : true) 
        &&
        (this.maxPrice ? product.price <= this.maxPrice : true)
     );
    }
    this.bindingprice=this.filteredProducts
  }
}
