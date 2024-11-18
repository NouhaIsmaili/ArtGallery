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
  // Nombre de tentatives de connexion
  nbTentatives: number = 0;

  // Injection des dépendances
  public readonly userService: UserService = inject(UserService);
  readonly fb: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  // Formulaire utilisateur
  userForm!: FormGroup;

  ngOnInit(): void {
    // Initialisation du formulaire avec des validations
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validation d'email
      pwd: ['', Validators.required] // Mot de passe requis
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.userForm.valid) {
      const { email, pwd } = this.userForm.value;
      console.log('Email entered:', email);
      console.log('Password entered:', pwd);
  
      this.userService.authenticate(email, pwd).subscribe(user => {
        if (user) {
          console.log('Login successful:', user);
          this.nbTentatives = 0;
          this.router.navigate(['/tables']);
        } else {
          this.nbTentatives++;
          console.log(`Failed login attempts: ${this.nbTentatives}`);
          if (this.nbTentatives >= 3) {
            this.router.navigate(['/changePassword']);
          }
        }
      });
    }
  }
  

  // Vérification si l'email est invalide
  isValidEmail() {
    return this.userForm.get('email')?.invalid && this.userForm.get('email')?.touched;
  }

  // Vérification si le mot de passe est invalide
  isValidPassword() {
    return this.userForm.get('pwd')?.invalid && this.userForm.get('pwd')?.touched;
  }
}
