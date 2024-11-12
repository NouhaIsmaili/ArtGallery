import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { ArtTable } from '../../model/art-table';
@Component({
  selector: 'app-info-prod',
  standalone: true,
  imports: [MatDialogActions,MatDialogClose,MatDialogContent],
  templateUrl: './info-prod.component.html',
  styleUrl: './info-prod.component.css'
})
export class InfoProdComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:ArtTable) {}


}
