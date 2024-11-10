import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtTable } from '../model/art-table';
const URL="";
@Injectable({
  providedIn: 'root'
})
export class ArtTableService {
  private readonly http: HttpClient = inject(HttpClient);

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


  constructor() { }
}
