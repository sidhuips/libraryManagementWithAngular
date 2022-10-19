import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Book } from './models/book';
import { Search } from './models/search';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpClient: HttpClient) { }

  private urlBase = 'http://localhost:8081/libraryService'

  private httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})}

getAllBooks(): Book[] {
  let articles: Book[] = []
  this.httpClient.get<Book[]>(this.urlBase+ "/" +"books", this.httpOptions).subscribe((books) => {
    books.forEach((book) => {
      
      articles.push(this.toBook(book));
    })
  })
  console.log(articles)
  return articles;
}

saveBook(book: Book) {
  let Json: string = JSON.stringify(book);
  console.log(Json);
  return this.httpClient.post<string>(this.urlBase + "/" +"addBook",Json,this.httpOptions)
}

updateBook(book: Book) {
  let Json: string = JSON.stringify(book);
  console.log(Json);
  return this.httpClient.post<string>(this.urlBase + "/" +"updateBook",Json,this.httpOptions)
}

removeBook(book: Book) {
  let Json: string = JSON.stringify(book);
  console.log(Json);
  return this.httpClient.post<string>(this.urlBase + "/" +"removeBook",Json,this.httpOptions)
}

searchBook(search: Search): Book[] {
  let booksSearched: Book[] = []
  let Json: string = JSON.stringify(search);
  this.httpClient.post<Book[]>(this.urlBase + "/" +"searchBook",Json,this.httpOptions).subscribe((books) => {
    books.forEach((book) => {
      
      booksSearched.push(this.toBook(book));
    })
  })
  console.log(booksSearched)
  return booksSearched;
}

toBook(book: any): Book {
  return new Book(book["id"], book["bookName"], book["type"], book["author"]);
}
}