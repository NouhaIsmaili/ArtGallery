import { Component, inject, OnInit } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { ArtTable } from '../../../model/art-table';
import { ArtTableService } from '../../../services/art-table.service';

@Component({
  selector: 'app-change-table-order',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './change-table-order.component.html',
  styleUrl: './change-table-order.component.css'
})
export class ChangeTableOrderComponent implements OnInit{
  
  liste:ArtTable[]=[];
  oldOrder:ArtTable[]=[];
  i:number=0
  private ArtTableService:ArtTableService=inject(ArtTableService)

  ngOnInit(): void {
    this.ArtTableService.getProducts().subscribe(
      data=>this.liste=data
    )
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.liste, event.previousIndex, event.currentIndex);
  }

  saveOrder() {
    
   /* this.ArtTableService.addProducts(JSON.parse(JSON.stringify(this.liste))).subscribe({
      next: (response) => console.log('Ordre sauvegardé avec succès', response),
    });*/

   
    this.ArtTableService.getProducts().subscribe(
      data=>this.oldOrder=data
    )
    for(this.i=0;this.i<this.oldOrder.length;this.i++){
      if(this.oldOrder[this.i].id!=this.liste[this.i].id){
        this.ArtTableService.updateProduct(this.oldOrder[this.i].id,this.liste[this.i]).subscribe({
          next: (response) => console.log('Ordre sauvegardé avec succès', response),

          
        })
      }
         
    };
    
  }
}
