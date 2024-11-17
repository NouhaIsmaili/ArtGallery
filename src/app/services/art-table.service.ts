import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtTable } from '../model/art-table';
import { Category } from '../model/category';
const URL="http://localhost:3000/artWork";
@Injectable({
  providedIn: 'root'
})
export class ArtTableService {
  private readonly http: HttpClient = inject(HttpClient);

  // updateOrder(articles: ArtTable[]): Observable<ArtTable[]> {
  //   return this.http.put<ArtTable[]>(URL, articles); // Use PUT to replace the collection
  // }
  
  getProducts(): Observable<ArtTable[]> {
    return this.http.get<ArtTable[]>(URL);
  }

  getProductById(id: string): Observable<ArtTable> {
    return this.http.get<ArtTable>(URL +'/'+id);
  }

  addProduct(product: ArtTable): Observable<ArtTable> {
    return this.http.post<ArtTable>(URL, product);
  }

  updateProduct(id: string, product: ArtTable): Observable<ArtTable> {
    return this.http.put<ArtTable>(URL +'/'+id, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(URL +'/'+id);
  }

  updateLikes(id: string, nbLikes: number): Observable<ArtTable> {
    return this.http.patch<ArtTable>(`${URL}/${id}`, { nbLikes });
  }

  updateComments(id: string, comments: Comment[]): Observable<ArtTable> {
    return this.http.patch<ArtTable>(`${URL}/${id}`, { comments });
  }

  getProductsByCategory(category: Category): Observable<ArtTable[]> {
    return this.http.get<ArtTable[]>(`${URL}?category=${category}`);
  }
  // updateDisponibility(product: ArtTable): Observable<ArtTable> {
  //   disponibility:Boolean = product.quantity > 0;
  //   return this.http.patch<ArtTable>(`${URL}/${product.id}`, { disponibility > 0 });
  // }
  constructor() { }
}
