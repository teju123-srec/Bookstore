import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { bestbook, book } from '../data-type';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult:book[] | any

  constructor(private activeRoute:ActivatedRoute,private book:BookService ) { }

  ngOnInit() {
    let query=this.activeRoute.snapshot.paramMap.get('query')
    console.warn(query)
    query && this.book.searchbook(query).subscribe((res)=>{
         this.searchResult=res;
    })

  }

}
