import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Liste des utilisateurs disponibles
  private users: User[] = [
    new User('Adminadmin', 'admin@example.com', 'admin123456'),
  ];

  // Méthode pour authentifier un utilisateur
  authenticate(email: string, password: string): Observable<User | null> {
    const authenticatedUser = this.users.find(
      u => u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
           u.password === password
    );
    return of(authenticatedUser || null);
  }
  
  

  // Mise à jour du mot de passe pour un utilisateur
  updatePassword(email: string, newPassword: string): Observable<void> {
    const user = this.users.find(u => u.email === email);
    if (user) {
      user.password = newPassword;
      console.log(`Password updated for user: ${email}`);
    }
    return of();
  }

  constructor() {}
}
