import { Component, inject, OnInit } from '@angular/core';
import { ArtTable } from '../../../model/art-table';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArtTableService } from '../../../services/art-table.service';
import { Category } from '../../../model/category';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule,
      MatIconModule,
     FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{
  categories=Object.values(Category);
  private fb: FormBuilder=inject(FormBuilder)
  private readonly artTableService: ArtTableService=inject(ArtTableService)
  productForm!: FormGroup
  ngOnInit(): void {
    this.productForm = this.fb.nonNullable.group({

      name: ['',[Validators.required]],
      photo: ['', [Validators.required]],
      height: [0, [Validators.required, Validators.min(60), Validators.max(500)]],
      width: [0, [Validators.required, Validators.min(60), Validators.max(500)]],
      painter: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      disponibility: [true],
      discount: [0, [Validators.required,Validators.min(0), Validators.max(100)]],
      nbLikes: [0],
      dateCreate: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      description: [''],
      comments:[],
      category: [Category.abstrait, [Validators.required]], 
    });
  }
  isFieldInvalid(field: string) {
    const control = this.productForm.get(field);
    return control?.invalid && control?.touched;
  }


  addProduct() {
    console.log(this.productForm.value)
      const newProduct: ArtTable = this.productForm.value;
      this.artTableService.addProduct(newProduct).subscribe(
         data=> {
          alert('Produit ajouté avec succès !');
          console.log(data);
         this.productForm.reset(); 
        },
    );   
  }
}
