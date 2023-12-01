import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { book, books } from '../data-type';
import { JwtserviceService } from '../services/jwtservice.service';
import { AuthService } from '../services/auth.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  booklist:any|book;
  data:books[] =[];
  message:string|undefined;
  isLoggedIn:boolean=false;
  constructor( private router:Router,private book:BookService,private activateRoute:ActivatedRoute,private storageService:JwtserviceService,private auth:AuthService,private admin:AdminService) { }

  ngOnInit():void {
    if(this.storageService.isLoggedIn())
      {
          this.isLoggedIn=true;
          this.allBooks()
      }
      else{
        this.isLoggedIn=false;
      }

  }

  logOut()
  {
    this.auth.signOut();
    this.isLoggedIn=false;
    this.router.navigate(['/home']);

  }

allBooks()
{
 this.book.getallbooks().subscribe((res)=>{
   this.data=res;
   console.log(res)
 })
}

deletebook(id:string)
{
  this.book.deleteBook(id).subscribe((res)=>
  {
      this.allBooks();
    });
}

}





