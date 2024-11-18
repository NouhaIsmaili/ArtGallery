import { Component, inject, OnInit } from '@angular/core';
import { ArtTableService } from '../../services/art-table.service';
import { ArtTable } from '../../model/art-table';
import { RouterLink, RouterModule } from '@angular/router';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [RouterModule,RouterLink,EditTableComponent,FormsModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit {
  searchTerm: string = '';
  tables:ArtTable[]=[];
  public readonly artTableService: ArtTableService = inject(ArtTableService);
  filteredTables: ArtTable[] | null = null; 
ngOnInit(): void {
  this.artTableService.getProducts().subscribe(
    (data) => {
      console.log('Données récupérées :', data); // Vérifiez les données ici
      this.tables = data;
    },
    (error) => {
      console.error('Erreur lors de la récupération des produits :', error); // Gérer les erreurs
    }
  );
}

onDelete(id: string): void {
  console.log('Tentative de suppression pour ID:', id);
  this.artTableService.deleteProduct(id).subscribe(
    () => {
      this.tables = this.tables.filter((table) => table.id !== id);
      console.log('Suppression réussie pour ID:', id);
    },
    
  );
}
onSearch(): void {
  const searchTerm = this.searchTerm.toLowerCase();
  this.filteredTables = this.tables.filter((table) =>
    (table.name && table.name.toLowerCase().includes(searchTerm)) ||
    (table.category && table.category.toLowerCase().includes(searchTerm)) ||
    (table.price != null && table.price.toString().includes(searchTerm)) // Ajout de la vérification de `price`
  );
  console.log('Résultats filtrés :', this.filteredTables);
}

  
}
