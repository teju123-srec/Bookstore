import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  updateform:FormGroup|any
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private book:BookService) { }

  ngOnInit():void {
    this.updateform=this.fb.group({
      name:["",Validators.required],
      author:["",Validators.required],
      price:["",Validators.required],
      types:["",[Validators.required]],
      description:["",Validators.required],
      Image:["",Validators.required]

    })

    let bookId=this.route.snapshot.paramMap.get('id');
    console.warn(bookId);
    bookId && this.book.getbookdetails(bookId).subscribe((data)=>
    {
    console.warn(data)

  })
}

  onupdatebook()
  {
    console.warn(this.updateform.value)
  }
}
