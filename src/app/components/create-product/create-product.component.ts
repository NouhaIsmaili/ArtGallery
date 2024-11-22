import { Component, inject, OnInit } from '@angular/core';
import { ArtTable } from '../../model/art-table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtTableService } from '../../services/art-table.service';
import { Category } from '../edit-table/edit-table.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  categories=Object.values(Category);
  productForm!:FormGroup;
  private fb: FormBuilder=inject(FormBuilder)
  private readonly artTableService: ArtTableService=inject(ArtTableService)
  constructor(
  ) {}
  ngOnInit(): void {
    this.productForm = this.fb.nonNullable.group({
      name: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      height: [0, [Validators.required, Validators.min(0)]],
      width: [0, [Validators.required, Validators.min(0)]],
      painter: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      disponibility: [true, [Validators.required]],
      discount: [0, [Validators.min(0), Validators.max(100)]],
      nbLikes: [0, [Validators.min(0)]],
      dateCreate: [new Date(), [Validators.required]],
      description: [''],
      category: [Category.abstrait, [Validators.required]], 
    });
  }

 
  addProduct() {
    // console.log('Tentative d’ajout du produit...');
    if (this.productForm.valid) {
      const newProduct: ArtTable = this.productForm.value;
      // console.log('Données du produit à ajouter :', newProduct); 
      this.artTableService.addProduct(newProduct).subscribe(
         data=> {
          console.log('Produit ajouté avec succès :', data);
          console.log(this.productForm.value);
         this.productForm.reset(); 
        },
      

      );
   
    } 
  }
}
