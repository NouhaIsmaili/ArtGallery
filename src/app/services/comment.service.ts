import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArtTable } from '../model/art-table';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly http: HttpClient = inject(HttpClient);

  
  // getCommentsByProductId(productId: string): Observable<Comment[]> {
  //   return this.http.get<Comment[]>(URL + '/product/' + productId);  
  // }

  
  // addComment(productId: string, comment: Comment): Observable<Comment> {
  //   return this.http.post<Comment>(URL + '/product/' + productId, comment);  
  // }

 
  // updateComment(commentId: string, updatedComment: Comment): Observable<Comment> {
  //   return this.http.put<Comment>(URL + '/' + commentId, updatedComment);  
  // }

  
  // deleteComment(commentId: string): Observable<void> {
  //   return this.http.delete<void>(URL + '/' + commentId);  
  // }
}
