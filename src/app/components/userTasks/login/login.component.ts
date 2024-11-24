import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{

private readonly userService: UserService = inject(UserService);
private readonly fb: FormBuilder = inject(FormBuilder);
 readonly router: Router = inject(Router);
user!:User

isValid:boolean=true;

userForm:FormGroup=new FormGroup({
  email:new FormControl(),
  pwd:new FormControl()
})

ngOnInit(): void {
  this.userService.getUserById("1").subscribe(
    data=>{
      console.log(data)
      this.user=data
    }
  )
 
  this.userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required,Validators.minLength(6)]],
  });
}
login(email: string, password: string): void {
  this.userService.login(email,password,this.user).subscribe(
    data=>{
      if(data==true){
        this.router.navigate(['/user'])
        console.log(data)
        this.isValid=true
      }else{
        this.isValid=false
      }
    }
  )

}



onSubmit(){
     this.login(this.userForm.value.email, this.userForm.value.pwd);
 }

 

isValidEmail(){
 return this.userForm.get('email')?.invalid && this.userForm.get('email')?.touched;
}
isValidpwd(){
  return this.userForm.get('pwd')?.invalid && this.userForm.get('pwd')?.touched;
 }


}
