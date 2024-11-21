import { inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URL="http://localhost:3000/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http: HttpClient = inject(HttpClient);

  // user:User={
  //   "id":"1",
  //   "email":"gallery@gmail.com",
  //   "pwd":"123456789"

  // }

  getuser():Observable<User>{
    return this.http.get<User>(URL);
  }
  getUserById( id:string): Observable<User> {
    return this.http.get<User>(URL +'/'+id);
  }


  login(email:string,pwds:string,user:User):Observable<boolean>{
      let connected=( pwds===user.pwd && email===user.email);
      if(connected){
        localStorage.setItem("state","connected");
      }else{
        localStorage.setItem("state","disconnected");
      }
      return of(connected);
  }


  logout(){
    localStorage.setItem("state","disconnected")
  }

  changerPwd(pwd:string):Observable<User>{
        return this.http.patch<User>(URL+'/1',{pwd})
  }
  
  

  constructor() { }
}
