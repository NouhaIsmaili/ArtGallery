import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../edit-table/edit-table.component';
import { ArtTable } from '../../../model/art-table';
import { ArtTableService } from '../../../services/art-table.service';


@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
  activatedRoute:ActivatedRoute= inject(ActivatedRoute);
  readonly router:Router=inject(Router);
  categories = Object.values(Category);
  private artTableService:ArtTableService=inject(ArtTableService)
  readonly fb:FormBuilder=inject(FormBuilder);

  id!:string;
  product!:ArtTable;
  editForm!:FormGroup;

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"];
    this.artTableService.getProductById(this.id).subscribe(
      data=>{
        this.product=data;
        this.editForm= this.fb.nonNullable.group({
          name: [data.name,Validators.required],
          photo: [data.photo,Validators.required],
          height: [data.height,[Validators.required, Validators.min(60), Validators.max(500)]],
          width: [data.width,[Validators.required, Validators.min(60), Validators.max(500)]],
          painter: [data.painter,Validators.required],
          price: [data.price,[Validators.required,Validators.min(1)]],
          quantity: [data.quantity ,[Validators.required,Validators.min(0)]],
          disponibility: [data.disponibility],
          dateCreate:[data.dateCreate,[Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
          comments:[data.comments],
          category: [data.category,Validators.required],
          description: [data.description],
          discount: [data.discount,[Validators.min(0), Validators.max(100)]],
          nbLikes: [data.nbLikes]
        });
      }
    )
  }

  isFieldInvalid(field: string) {
    const control = this.editForm.get(field);
    return control?.invalid && control?.touched;
  }

  

  onSubmit(): void {
    if (this.editForm.valid) {
      this.artTableService.updateProduct(this.product.id, this.editForm.value).subscribe(() => {
      });
      this.router.navigate(['/user/productEdit']);
      alert("product updated!")
    }
  }
  onRetour(){
    this.router.navigate(['/user/productEdit']);
  }
}
