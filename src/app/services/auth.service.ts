import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private baseurl:string="http://localhost:5089/api/User/"
constructor(private http:HttpClient) { }

signUp(userobj:any){
 return this.http.post<any>(`${this.baseurl}register`,userobj);
}

login(loginobj:any):Observable<any>
{
  var login= this.http.post<any>(`${this.baseurl}login`,loginobj,{
    observe: "response",
    responseType: 'text' as 'json'
  });
  return login;
}
storeToken(tokenValue: string){
  sessionStorage.setItem('auth-user', tokenValue)
 }

 getToken(){
  return sessionStorage.getItem('auth-user')
 }

 isLoggedIn(): boolean {
  return !!sessionStorage.getItem('auth-user')
 }

signOut(){
      sessionStorage.clear();
      sessionStorage.removeItem('auth-user')
    }
 }


