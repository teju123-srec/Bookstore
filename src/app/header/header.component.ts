import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { BookService } from '../services/book.service';
import { bestbook, book, trendingbook } from '../data-type';
import { JwtserviceService } from '../services/jwtservice.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menutype:string='default'
searchResult:book[]| any
isLoggedIn:boolean=false;

  constructor( private router:Router,private book:BookService,private storageService:JwtserviceService,private auth:AuthService ) {

   }

  ngOnInit() :void{
      if(this.storageService.isLoggedIn())
      {
          this.isLoggedIn=true;
      }
      else{
        this.isLoggedIn=false;
      }
  }

  searchbook(query:KeyboardEvent)
  {
       if(query){
        const element=query.target as HTMLInputElement;
        console.warn(element.value)
       this.book.searchbook(element.value).subscribe(res=>
       {
               console.warn(res)
               if(res.length>5){
                res.length=length
               }
               this.searchResult=res
       })
       }
  }

  hidesearch()
  {
    this.searchResult=undefined
  }


  submitsearch(val:string)
  {
      console.warn(val)
      this.router.navigate([`search/${val}`]);
  }

  redirectToDetails(id:number)
  {
    this.router.navigate(['/bookdetails/'+id])
  }

  logOut()
  {
    this.auth.signOut();
    this.isLoggedIn=false;
    this.router.navigate(['/home']);
    
  }
}
