import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { fictionbook } from '../data-type';

@Component({
  selector: 'app-fictionbookdetails',
  templateUrl: './fictionbookdetails.component.html',
  styleUrls: ['./fictionbookdetails.component.css']
})
export class FictionbookdetailsComponent implements OnInit {

  bookdata:fictionbook|any
bookQuantity:number=1
  constructor(private activateRoute:ActivatedRoute,private book:BookService) { }

  ngOnInit():void {
    let bookid=this.activateRoute.snapshot.paramMap.get('booksid')
    console.warn(bookid)
    bookid && this.book.getbookdetails(bookid).subscribe((res)=>{
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
}
