import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { mangabook } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
data:mangabook[]=[]
  constructor(private api:BookService) { }

  ngOnInit() {
    this.displaymanga()
  }

  displaymanga()
  {
   this.api.getmangabooks().subscribe((res)=>{
     this.data=res;
     console.log(res)
   })
  }

  // todetails(id:number)
  // {
  //   this.route.navigate(['/bookdetails/'+id])
  // }
}
