import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [IonicModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  passwordGroup!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  readonly userService: UserService = inject(UserService);
  private router: Router = inject(Router);

  userEmail!: string; 

  ngOnInit(): void {
  
    this.passwordGroup = this.fb.group({
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.fetchEmail();
  }

  fetchEmail(): void {
    this.userService.getAdminData().subscribe((admin) => {
      this.userEmail = admin.email; 
      console.log('Email fetched:', this.userEmail);
    });
  }


  onSubmit(): void {
    const { NewPassword, ConfirmPassword } = this.passwordGroup.value;

  
    if (this.passwordGroup.valid && NewPassword === ConfirmPassword) {
      if (!this.userEmail) {
        console.error('User email not loaded yet');
        return;
      }

    
      this.userService.updatePassword(this.userEmail, NewPassword).subscribe((success) => {
        if (success) {
          console.log('Password successfully updated');
         
          this.router.navigate(['/user']);
        } else {
          console.error('Failed to update password: Email not found');
        }
      });
    } else {
      console.error('Passwords do not match or form is invalid');
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
