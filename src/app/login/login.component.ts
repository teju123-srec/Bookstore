import { HttpClient } from '@angular/common/http'
import { Component, OnInit} from '@angular/core'
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { JwtserviceService } from '../services/jwtservice.service';
import { TokenPayLoad } from 'models/Token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

Token: TokenPayLoad = new TokenPayLoad();
loginForm:FormGroup | any;
// roles: string[] = [];
// isLoggedIn = false;
// isLoginFailed = false;

  constructor(private router:Router, private http:HttpClient,private auth:AuthService,private fb:FormBuilder,private storageService:JwtserviceService) { }

   ngOnInit():void
  {
    // if(this.storageService.isLoggedIn()){
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
    {
    this.loginForm=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }
  }

  onlogin()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
       this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{
         this.storageService.saveUser(res['body']);
          this.Token = this.storageService.getDecodedAccessToken();
          if(this.Token.role=="Customer")
          {
            alert("Login Successfull")
            this.router.navigate(['\home'])
          }
         else if(this.Token.role=="Admin"){
           this.router.navigate(['\admin-dashboard']);
          }
        },
        error:(err)=>
        {
           alert(err?.error.message)
        }
       })

      }
    }
  }






