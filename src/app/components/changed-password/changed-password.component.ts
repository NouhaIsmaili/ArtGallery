import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-changed-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changed-password.component.html',
  styleUrls: ['./changed-password.component.css']
})
export class ChangedPasswordComponent implements OnInit {
  passwordGroup!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  readonly userService: UserService = inject(UserService);
  private router: Router = inject(Router); // Injecter le Router

  ngOnInit(): void {
    this.passwordGroup = this.fb.group({
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    const { NewPassword, ConfirmPassword } = this.passwordGroup.value;

    // Vérifier que le formulaire est valide et que les mots de passe correspondent
    if (this.passwordGroup.valid && NewPassword === ConfirmPassword) {
      const userEmail = 'admin@example.com'; // Utiliser l'email de l'utilisateur connecté

      // Mise à jour du mot de passe via le service UserService
      this.userService.updatePassword(userEmail, NewPassword).subscribe(() => {
        console.log('Password successfully updated');
        // Redirection vers la page de connexion
        this.router.navigate(['/user']);
      });
    } else {
      console.log('Passwords do not match or form is invalid');
    }
  }

  isInValidNewpwd() {
    return this.passwordGroup.get('NewPassword')?.invalid && this.passwordGroup.get('NewPassword')?.errors?.['minlength'] &&
           this.passwordGroup.get('NewPassword')?.touched;
  }

  isInValidConfirmpwd() {
    return this.passwordGroup.get('ConfirmPassword')?.invalid && this.passwordGroup.get('ConfirmPassword')?.errors?.['minlength'] &&
           this.passwordGroup.get('ConfirmPassword')?.touched;
  }
}
