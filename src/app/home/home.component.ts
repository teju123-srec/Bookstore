import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { bestbook, trendingbook } from '../data-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


// public booklist:any
data:trendingbook[]=[]
data2:bestbook[]=[]


  constructor(private api:BookService,private router:Router) { }

  ngOnInit():void{

    this.getbook()
    this.getbestbook()
  }

  getbook()
  {
       this.api.getbook().subscribe(res=>{
        this.data=res;
        console.log(res)
       }
)

  }

  getbestbook()
{
  this.api.getbestbook().subscribe(res=>{
    this.data2=res;
    console.log(res)
  })

}

todetails(){
  this.router.navigate(['/bookdetails/{{item.id}}'])
}


}
