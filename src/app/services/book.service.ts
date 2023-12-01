import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { bestbook, book,books, fictionbook, mangabook, trendingbook } from '../data-type';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BookService {

constructor(private http:HttpClient) {
}
getallbooks()
{
 return this.http.get<books[]>(" http://localhost:5089/GetAllBooks")
}

deleteBook(id:string):Observable<string>
{
  return this.http.delete<string>(`http://localhost:5089/DeleteBook?id=${id}`)

}

// getbooks(id:string)
// {
//   return this.http.get<books>(`http://localhost:5089/GetBooks/${id}`)
// }

getbook()
{
  return this.http.get<trendingbook[]>("http://localhost:5089/GetTypeOfBooks?type=0")

}

getbestbook()
{
  return this.http.get<bestbook[]>("http://localhost:5089/GetTypeOfBooks?type=1")
}

getbookdetails(id:string)
{
  return this.http.get<book[]>(`http://localhost:5089/GetBooks?Id=${id}`)
}

searchbook(query:string)
{
 return this.http.get<book[]>(`http://localhost:5089/SearchBooks?title=${query}`)
}


// searchbestbook(query:string)
// {
//  return this.http.get<bestbook[]>(`http://localhost:3000/bestbooks?q=${query}`)
// }

// searchtrendingbook(query:string)
// {
//  return this.http.get<trendingbook[]>(`http://localhost:3000/trendingbooks?q=${query}`)
// }

getfictionbooks()
{
  return this.http.get<fictionbook[]>("http://localhost:5089/GetTypeOfBooks?type=2")
  }

//   getfictionbookdetails(id:string)
// {
//   return this.http.get<fictionbook[]>(`http://localhost:3000/fiction/${id}`)
// }

getmangabooks()
{
  return this.http.get<mangabook[]>("http://localhost:5089/GetTypeOfBooks?type=3")
  }

  // getmangabookdetails(id:string)
  // {
  //   return this.http.get<mangabook[]>(`http://localhost:3000/manga/${id}`)
  // }

  addbook(book:any)
  {
      return this.http.post('http://localhost:5089/AddBook',book)
  }

  // booklist(id:string)
  // {
  //   return this.http.get<book[]>(`http://localhost:5089/GetBooks?Id=${id}`)
  // }
}



