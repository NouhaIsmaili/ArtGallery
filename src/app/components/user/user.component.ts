import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] 
})
export class UserComponent implements OnInit {
  nbTentatives: number = 0; 
  public readonly userService: UserService = inject(UserService);
  userForm!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router); 
  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Ajout de la validation d'email
      pwd: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email, pwd } = this.userForm.value;
    this.userService.authenticate(email, pwd).subscribe(user => {
      if (user) {
        console.log("Login successful");
        this.nbTentatives = 0; 
      } else {
        this.nbTentatives++;
        console.log(`Failed login attempts: ${this.nbTentatives}`);
        if (this.nbTentatives >= 3) {
          //routage
          this.router.navigate(['/change-password']);
        }
      }
    });
  }

  isValidEmail(){
    return this.userForm.get('email')?.invalid && this.userForm.get('email')?.touched;
  }

  isValidPassword(){
    return this.userForm.get('pwd')?.invalid && this.userForm.get('pwd')?.touched;
  }
}