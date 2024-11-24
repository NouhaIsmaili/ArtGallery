import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArtTable } from '../../model/art-table';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtTableService } from '../../services/art-table.service';
export enum Category {
  abstrait = "Abstrait",
  classique = "classique",
  fauve = "Fauve",
  figuratif = "figuratif",
  pop_art = "pop_art"
}

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  activatedRoute:ActivatedRoute= inject(ActivatedRoute);
  id!:number;
  readonly router:Router=inject(Router);
  categories = Object.values(Category);
  product!:ArtTable;
  private artTableService:ArtTableService=inject(ArtTableService)
  readonly fb:FormBuilder=inject(FormBuilder);
   editForm!:FormGroup;
  ngOnInit(): void {
    this.id=Number(this.activatedRoute.snapshot.params["id"]);
    this.artTableService.getProductById(this.product.id).subscribe(
      data=>{this.product=data
      this.editForm.patchValue(this.product);
      }
    )
    this.editForm = this.fb.group({
      name: [""],
      photo: [""],
      height: [""],
      width: [""],
      painter: [""],
      price: ["",  Validators.min(0)],
      quantity: ["" ,Validators.min(0)],
      disponibility: [""],
      category: [""],
      description: [""],
      state: [""],
      discount: ["", Validators.min(0)],
      nbLikes: ["", Validators.min(0)]
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.artTableService.updateProduct(this.product.id, this.product).subscribe(() => {
       
      });
    }
  }
  onRetour(){
    this.router.navigate(['/tables']);
  }
  }









