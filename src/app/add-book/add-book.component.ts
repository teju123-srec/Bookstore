import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
// import {booktypes} from '../models/types';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addmessage:string|undefined
  addbook:FormGroup|any
  // booktypes:booktypes
  constructor(private fb:FormBuilder,private book:BookService) { }

  ngOnInit():void{
    this.addbook=this.fb.group({
      title:["",[Validators.required]],
      author:["",[Validators.required]],
      price:["",[Validators.required]],
      types:["",[Validators.required]],
      description:["",[Validators.required]],
      image:["",[Validators.required]],


    })
  }

  onaddbook(){
    this.addbook.value.types = Number(this.addbook.value.types)
    this.book.addbook(this.addbook.value).subscribe((result)=>
    {
       console.warn(result)
       if(result)
       {
          this.addmessage="Book is added Successfully"
       }
    })

    setTimeout(() => {
      this.addmessage=undefined
   }, 3000);
  }
}
