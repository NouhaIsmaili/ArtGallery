import { Component, inject, OnInit } from '@angular/core';
import { ArtTable } from '../../model/art-table';
import { ArtTableService } from '../../services/art-table.service';
import { JsonPipe } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [JsonPipe,ProductComponent,MatGridListModule],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css'
})
export class ProdListComponent implements OnInit{
  
  liste:ArtTable[]=[];
  private ArtTableService:ArtTableService=inject(ArtTableService)

  ngOnInit(): void {
    this.ArtTableService.getProducts().subscribe(
      data=>this.liste=data
    )
  }
  

}
