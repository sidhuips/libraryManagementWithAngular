import { Component, OnInit } from '@angular/core';
import { Book } from '.././models/book';
import { Search } from '.././models/search';
import { LibraryService } from '../library.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  
  showList: boolean = false;
  isbnExist: boolean = false;
  idEmpty: boolean = false;
  booksFound: Book[] = [];
  public book: Book = new Book("","","","")
  public search: Search = new Search("")
  checkoutForm = this.formBuilder.group({
    bookName: ""
  })

  constructor(private libraryService : LibraryService, private formBuilder: FormBuilder, private router: Router) {  
       
  }
  ngOnInit(): void {

  }
  searchBook(): void {
    this.resetForm();
    console.log("hereee")
    let newBook: any = this.checkoutForm.getRawValue();

    this.search.setSearchString(newBook.bookName);
    this.booksFound = this.libraryService.searchBook(this.search)
    this.showList = true;
    console.log(this.book)
    this.router.navigate(['/product/searchBook/'])
    this.showList = true;
  }
  resetForm() : void{
    this.isbnExist = false;
    this.idEmpty = false;
  }


}
