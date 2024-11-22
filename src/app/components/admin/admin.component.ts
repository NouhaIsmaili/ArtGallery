import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule,IonicModule,RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
 // Formulaire utilisateur
 userForm!: FormGroup;

 // Injection des dépendances
 private readonly userService: UserService = inject(UserService);
 private readonly fb: FormBuilder = inject(FormBuilder);
  readonly router: Router = inject(Router);
 

 ngOnInit(): void {
  
   this.userForm = this.fb.group({
     email: ['', [Validators.required, Validators.email]], // Validation d'email
     pwd: ['', Validators.required], // Mot de passe requis
   });
 }
 authenticate(email: string, password: string): void {
  this.userService.getAdminData().subscribe((admin) => {
    if (admin && admin.email === email && admin.password === password) {
      console.log('Login successful');
      this.router.navigate(['/tables']); 
     
    } 
  });
}


 
onSubmit(){
    if (this.userForm.valid) {
      const { email, pwd } = this.userForm.value;
      this.authenticate(email, pwd);

    }
  }
 
  

// Vérification si l'email est invalide
isValidEmail(){
  return this.userForm.get('email')?.invalid && this.userForm.get('email')?.touched;
}

// Vérification si le mot de passe est invalide
isValidPassword(){
  return this.userForm.get('pwd')?.invalid && this.userForm.get('pwd')?.touched;
}
}
