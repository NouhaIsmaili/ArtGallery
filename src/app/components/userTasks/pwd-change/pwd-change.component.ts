import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user';

@Component({
  selector: 'app-pwd-change',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './pwd-change.component.html',
  styleUrl: './pwd-change.component.css'
})
export class PwdChangeComponent {
  passwordGroup:FormGroup=new FormGroup({
    OldPassword:new FormControl(),
    NewPassword:new FormControl()
  })
  readonly fb: FormBuilder = inject(FormBuilder);
  readonly userService: UserService = inject(UserService);
  private router: Router = inject(Router);

  durationInSeconds = 5;
  user!:User;
  ngOnInit(): void {
    this.userService.getUserById("1").subscribe(
      data=>{
        console.log(data)
        this.user=data
      }
    )
  
    this.passwordGroup = this.fb.group({
      OldPassword: ['', [Validators.required, Validators.minLength(6)]],
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isInvalidOldPassword(){
    return this.passwordGroup.get("OldPassword")?.invalid && this.passwordGroup.get("OldPassword")?.touched ;
  }  
  isInvalidNewpwd(){
    return this.passwordGroup.get("NewPassword")?.invalid && this.passwordGroup.get("NewPassword")?.touched ;
  }  
  isInvalidconfirmPassword(){
    return this.passwordGroup.get("confirmPassword")?.invalid && this.passwordGroup.get("confirmPassword")?.touched ;
  }

  msg:string=""
  onChange(){
    this.msg=""
    if(this.passwordGroup.value.OldPassword==this.user.pwd){
      if(this.passwordGroup.value.confirmPassword==this.passwordGroup.value.NewPassword){
        this.userService.changerPwd(this.passwordGroup.value.NewPassword).subscribe(
            data=>{
              console.log(data)
            this.router.navigate(['/login'])
            alert("password changed!")
          }
        )
      }else{
        this.msg="confirm password incorrect"
      }
    }else{
      this.msg="incorrect password"
    }
  }
}
