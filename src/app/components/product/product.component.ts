import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ArtTable } from '../../model/art-table';
import { ArtTableService } from '../../services/art-table.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoProdComponent } from '../info-prod/info-prod.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatIconModule,CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductComponent {
  private artTableService:ArtTableService=inject(ArtTableService)

  @Input() tab!: ArtTable; 
//dialog
readonly dialog = inject(MatDialog);

  openDialog(tab:ArtTable) {
    const dialogRef = this.dialog.open(InfoProdComponent,{data: tab});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  //gerer les nb likes
  like: boolean = false;
  onlike(art: ArtTable): void{
  this.like = !this.like; 
    if(this.like){
      art.nbLikes++;
    }
    else{
      art.nbLikes--;
    }
    this.artTableService.updateLikes(art.id, art.nbLikes).subscribe(
      data => {
        art = data;
      }
    )
  }
        
}

