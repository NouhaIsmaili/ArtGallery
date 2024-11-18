import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtTableService } from '../../services/art-table.service';
import { ArtTable } from '../../model/art-table';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './edit-table.component.html',
  styleUrl: './edit-table.component.css'
})
export class EditTableComponent implements OnInit{
  id!:string;
  table: ArtTable|undefined;
  activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  public readonly artTableService: ArtTableService = inject(ArtTableService);
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.artTableService.getProductById(this.id).subscribe(
      data=>this.table= data
    )
    }
    router:Router=inject(Router);
    onRetour(){
      this.router.navigate(['/tables']);
    }
    onStatus(){
      if (this.table) {
        this.table.state = this.table.state === 'En cours' ? 'Confirmé' : 'En cours';
        if (this.table.state === 'Confirmé') {
          this.decreaseQuantity();
        }
        this.updateTable();
      }
    }
    decreaseQuantity() {
      if (this.table && this.table.quantity > 0) {
        this.table.quantity--;
        if (this.table.quantity === 0) {
          this.table.disponibility = false; // Rendre le produit indisponible
        }
      }
    }
    addQuantity(){
      if (this.table) { 
        const quantityToAdd = parseInt(prompt('Entrez la quantité à ajouter:', '1') || '0', 10); 
        if (quantityToAdd > 0) { 
          this.table.quantity += quantityToAdd; 
          this.table.disponibility = true; 
          this.updateTable(); 
        } else { 
          console.warn('Quantité non valide'); 
        } 
      } 
    }
    
    updateTable(){
      if (this.table) {
        this.artTableService.updateProduct(this.table.id, this.table).subscribe(
          (updatedProduct) => {
            console.log('Produit mis à jour avec succès:', updatedProduct);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour du produit:', error);
          }
        );
      }
    }
    }
    // quand il confirme la quantite diminu et si la quantite a 0peux ajouter ou si disponible==false

