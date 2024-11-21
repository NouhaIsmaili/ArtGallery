import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-nav-bar-user',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './nav-bar-user.component.html',
  styleUrl: './nav-bar-user.component.css'
})
export class NavBarUserComponent {
  userService:UserService=inject(UserService)
  router:Router=inject(Router)

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);

  }
}
