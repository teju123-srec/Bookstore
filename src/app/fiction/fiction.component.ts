import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fictionbook } from '../data-type';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent implements OnInit {

  data:fictionbook[]=[]
  constructor(private api:BookService) { }

  ngOnInit():void {
     this.displayfiction()
  }

   displayfiction()
   {
    this.api.getfictionbooks().subscribe((res)=>{
      this.data=res;
      console.log(res)
    })
   }

}




