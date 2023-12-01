import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { bestbook, book } from '../data-type';



@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

bookdata:any|book
bookQuantity:number=1

  constructor(private activateRoute:ActivatedRoute,private api:BookService) { }

  ngOnInit():void {
    let bookid=this.activateRoute.snapshot.paramMap.get('booksid')
    console.warn(bookid)
    bookid && this.api.getbookdetails(bookid).subscribe((res)=>{
      console.warn(res);
      this.bookdata=res;

    })

  }
  handleQuantity(val:string)
  {
    if(this.bookQuantity<20 && val==='plus'){
      this.bookQuantity+=1;
    }else if(this.bookQuantity>1 && val==='min'){
      this.bookQuantity-=1;
    }
    }

    addtocart(){

    }
  }


