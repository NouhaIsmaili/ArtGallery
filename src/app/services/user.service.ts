import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    new User('AdminArtGallery', 'adminArtGallery@gmail.com', 'artgallery123456'),
  ];

  authenticate(email: string, password: string): Observable<User | null> {

    const authenticatedUser = this.users.find(
      u => u.email === email && u.password === password
    );

    // Retourne un Observable avec l'utilisateur ou null
    return of(authenticatedUser || null);
  }

  constructor() { }
}
