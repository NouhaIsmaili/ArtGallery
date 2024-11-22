import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from '../model/user';

const URL = 'http://localhost:3000/admin';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http: HttpClient = inject(HttpClient);

  constructor() {}

  // Get admin data (email, password)
  getAdminData(): Observable<User> {
    return this.http.get<User>(URL);
  }

 
 

  // Update password
  public updatePassword(email: string, newPassword: string): Observable<User> {
    return this.http.get<User>(URL).pipe(
      switchMap((admin) => {
        if (admin.email === email) {
          // If the email matches, update the password
          const updatedAdmin = { ...admin, password: newPassword };
          return this.http.put<User>(`${URL}/${admin.id}`, updatedAdmin); // PUT request with the updated admin data
        } else {
          throw new Error('Email not found');
        }
      })
    );
  }
 
}
