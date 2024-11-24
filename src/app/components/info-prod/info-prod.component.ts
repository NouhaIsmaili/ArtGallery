import { Component, inject, OnInit } from '@angular/core';
import { MatDialogClose } from '@angular/material/dialog';
import { ArtTable } from '../../model/art-table';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { ArtTableService } from '../../services/art-table.service';
import { Comment as ArtComment } from '../../model/comment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info-prod',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatDialogClose,
    DatePipe,
    CurrencyPipe,
    MatIconModule,
    FormsModule],
  templateUrl: './info-prod.component.html',
  styleUrl: './info-prod.component.css'
})
export class InfoProdComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  identifiant!: string;

  //formulaire-commentaire
  readonly fb: FormBuilder = inject(FormBuilder)
  commentService: CommentService = inject(CommentService)
  artTableService: ArtTableService = inject(ArtTableService)
  newComment: ArtComment[] = []
  data!: ArtTable
  errorMessage!: string;
  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.artTableService.getProductById(this.identifiant).subscribe(
      prod => {
        this.data = prod;
        console.log(this.data)
        this.newComment = prod.comments || []

      }
    )

    this.commentForm = this.fb.nonNullable.group({
      author: ['', Validators.required],
      date: [new Date()],
      message: ['', Validators.required]
    });


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
    this.artTableService.updateComments(this.identifiant, JSON.parse((JSON.stringify(this.newComment)))).subscribe(
      comntr => {
        console.log(comntr);
      }
    )

  }

  quantity: number = 1;
  onAddShopCard() {



    const wish = JSON.parse(localStorage.getItem('list') || '[]')
    console.log(this.quantity);
    const wishList = {
      article: this.data,
      qte: this.quantity,
    }


    // Vérification de la quantité disponible
    if (this.quantity > this.data.quantity) {
      this.errorMessage = 'The requested quantity exceeds the available stock.\n Select less then ' + this.data.quantity;

    } else {
      this.errorMessage = ''
      alert("product addet to your wish list")

      wish.push(wishList)
      localStorage.setItem('list', JSON.stringify(wish))
      console.log(localStorage.getItem('list'))

      //update quantity
      this.artTableService.updateqte(this.data.id, this.data.quantity - this.quantity).subscribe(
        update => this.data = update
      )
      if (this.data.quantity - this.quantity == 0) {
        this.artTableService.updatedisp(this.data.id, false).subscribe(
          update => this.data = update
        )
      }
    }

  }
}



