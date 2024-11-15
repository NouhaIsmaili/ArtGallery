import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { ArtTable } from '../../model/art-table';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { ArtTableService } from '../../services/art-table.service';
import { Comment as ArtComment } from '../../model/comment';
@Component({
  selector: 'app-info-prod',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogActions, MatDialogClose, MatDialogContent, DatePipe, CurrencyPipe, JsonPipe, MatIconModule],
  templateUrl: './info-prod.component.html',
  styleUrl: './info-prod.component.css'
})
export class InfoProdComponent implements OnInit {
  onAddShopCard() {
    throw new Error('Method not implemented.');
  }
  readonly data: ArtTable = inject(MAT_DIALOG_DATA);
  //formulaire
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

    const newCom: ArtComment = {
      ...this.commentForm.value
    };

    this.newComment.push(newCom)
    console.log(JSON.stringify(this.newComment))

  this.artTableService.updateComments(this.data.id,JSON.parse((JSON.stringify(this.newComment)))).subscribe(
    comntr => {
      console.log( comntr);
    }
  )
  this.commentForm.reset();

}
}



