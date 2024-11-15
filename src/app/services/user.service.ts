import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    new User('Admin', 'admin@example.com', 'admin123'),
    new User('SuperAdmin', 'superadmin@example.com', 'superadmin123')
  ];

  authenticate(email: string, password: string): Observable<User | null> {

    const authenticatedUser = this.users.find(
      u => u.email === email && u.password === password
    );

    // Retourne un Observable avec l'utilisateur ou null
    return of(authenticatedUser || null);
  }
  updatePassword(email: string, newPassword: string): Observable<void> {
    const user = this.users.find(u => u.email === email);
    if (user) {
      user.password = newPassword;
      console.log(`Password updated for user: ${email}`);
    }
    return of();
  }

  constructor() { }
}
