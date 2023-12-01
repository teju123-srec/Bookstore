import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

signupForm:FormGroup|any;

usernameregex="^[a-zA-Z]+$";
passwordregex="^([a-zA-Z0-9@*#]{8,15})$";
emailregex="[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
mobnoregex="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";


  constructor(private router:Router,private fb:FormBuilder, private http:HttpClient,private auth:AuthService) { }

  ngOnInit():void{
    this.signupForm=this.fb.group({
      username:["",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      password:["",[Validators.required,Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
      confirmpassword:["",[Validators.required]],
      userRole:["",[Validators.required]],
      email:["",[Validators.required,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]],
      mobileNumber:["",[Validators.required,Validators.pattern("^(0|91)?[6-9][0-9]{9}$")]],

    })

  }

  onsignup()
  {
    if(this.signupForm.valid)
    {

         this.auth.signUp(this.signupForm.value).subscribe({
          next:(res)=>{
            alert(res.message);
            this.signupForm.reset();
            this.router.navigate(['\login'])
          },
          error:(err)=>
          {
             alert(err?.error.message)
          }
         })

         console.log(this.signupForm.value)

    }
  }


}



