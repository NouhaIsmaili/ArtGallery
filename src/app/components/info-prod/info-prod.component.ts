import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { ArtTable } from '../../model/art-table';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { ArtTableService } from '../../services/art-table.service';
import { Comment as ArtComment } from '../../model/comment';
@Component({
  selector: 'app-info-prod',
  standalone: true,
  imports: [ReactiveFormsModule,
     MatDialogActions,
     MatDialogClose,
      MatDialogContent,
       DatePipe, 
       CurrencyPipe, 
       JsonPipe, 
       MatIconModule,
      FormsModule],
  templateUrl: './info-prod.component.html',
  styleUrl: './info-prod.component.css'
})
export class InfoProdComponent implements OnInit {
  //info produit by dialog
  readonly data: ArtTable = inject(MAT_DIALOG_DATA);
  
  //formulaire-commentaire
  readonly fb: FormBuilder = inject(FormBuilder)
  commentService: CommentService = inject(CommentService)
  artTableService: ArtTableService = inject(ArtTableService)
  newComment: ArtComment[] = []
  ngOnInit(): void {
    console.log(this.data)


    this.commentForm = this.fb.nonNullable.group({
      author: ['',Validators.required],
      date: [new Date()],
      message: ['',Validators.required]
    });
    this.newComment = this.data.comments || [];


  }

  commentForm: FormGroup = new FormGroup({
    author: new FormControl(),
    date: new FormControl(),
    message: new FormControl()

  })

  onSubmit() {
    console.log(this.commentForm.value)

    
    this.newComment.push(this.commentForm.value)
    console.log(JSON.stringify(this.newComment))

  this.artTableService.updateComments(this.data.id,JSON.parse((JSON.stringify(this.newComment)))).subscribe(
    comntr => {
      console.log( comntr);
    }
  )

}

quantity: number=1;
  onAddShopCard() {
    const wish=JSON.parse(localStorage.getItem('list')||'[]')
    console.log(this.quantity);
    const wishList={
      article:this.data,
      qte:this.quantity
    }
    wish.push(wishList)
    localStorage.setItem('list',JSON.stringify(wish))
    console.log(localStorage.getItem('list')) 
    
  }
}



