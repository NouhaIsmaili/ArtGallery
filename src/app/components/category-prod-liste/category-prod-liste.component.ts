import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { ActivatedRoute } from '@angular/router';
import { ArtTable } from '../../model/art-table';
import { ArtTableService } from '../../services/art-table.service';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-prod-liste',
  standalone: true,
  imports: [ProductComponent,FormsModule],
  templateUrl: './category-prod-liste.component.html',
  styleUrl: './category-prod-liste.component.css'
})
export class CategoryProdListeComponent implements OnInit {
 // @Input() category!: Category; 
  categ!:Category
  tabByCateg:ArtTable[]=[];
  private artTableService:ArtTableService=inject(ArtTableService)
  filteredProducts: ArtTable[] = [];
  bindingprice: ArtTable[] = [];
  bindingname: ArtTable[] = [];
  searchTerm: string = '';
  maxPrice?: number;
  minPrice?: number;

  activatedRoute: ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(): void {
  this.categ=this.activatedRoute.snapshot.params["category"]
  this.artTableService.getProductsByCategory(this.categ).subscribe(
    data=>{this.tabByCateg=data
      this.filteredProducts=data
      }
  )}
  searchProducts(): void {
    this.filterProductsByPrice()    
    // si on a fait une recherche par prix
    if(this.maxPrice || this.minPrice){
      this.filteredProducts = this.bindingprice.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }else{
      this.filteredProducts = this.tabByCateg.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.bindingname=this.filteredProducts
  }
  filterProductsByPrice() {
    if(this.searchTerm==''){
      this.filteredProducts = this.tabByCateg.filter(product => 
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
