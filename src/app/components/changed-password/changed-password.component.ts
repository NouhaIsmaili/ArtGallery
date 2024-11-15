import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  ngOnInit(): void {
    this.passwordGroup = this.fb.group({
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],  // Fixed validator
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]] // Fixed validator
    });
  }

  onSubmit(): void {
    const { NewPassword, ConfirmPassword } = this.passwordGroup.value;

    // Check if the form is valid and passwords match
    if (this.passwordGroup.valid && NewPassword === ConfirmPassword) {
      const userEmail = 'admin@example.com'; // Replace this with the actual user's email

      // Update the password using UserService
      this.userService.updatePassword(userEmail, NewPassword).subscribe(() => {
        console.log('Password successfully updated');
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
